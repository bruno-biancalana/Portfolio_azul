const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 10_000;
const requestsByIp = new Map();

const response = (statusCode, message) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  },
  body: JSON.stringify({ message })
});

const isRateLimited = (ip, now = Date.now()) => {
  const recent = (requestsByIp.get(ip) || []).filter(time => now - time < WINDOW_MS);
  recent.push(now);
  requestsByIp.set(ip, recent);
  return recent.length > MAX_REQUESTS;
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return response(405, 'Method not allowed');
  }

  const origin = event.headers.origin;
  const allowedOrigins = [
    process.env.ALLOWED_ORIGIN,
    process.env.URL,
    process.env.DEPLOY_PRIME_URL
  ].filter(Boolean).map(value => value.replace(/\/$/, ''));

  if (origin && allowedOrigins.length && !allowedOrigins.includes(origin.replace(/\/$/, ''))) {
    return response(403, 'Origin not allowed');
  }

  const contentType = event.headers['content-type'] || '';
  if (!contentType.startsWith('application/json')) {
    return response(415, 'Unsupported media type');
  }

  if (!event.body || Buffer.byteLength(event.body, 'utf8') > MAX_BODY_BYTES) {
    return response(413, 'Invalid request size');
  }

  const ip = event.headers['x-nf-client-connection-ip'] || 'unknown';
  if (isRateLimited(ip)) {
    return response(429, 'Too many requests');
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch {
    return response(400, 'Invalid JSON');
  }

  const name = String(payload.contact || '').trim();
  const email = String(payload.email || '').trim();
  const message = String(payload.text || '').trim();
  const honeypot = String(payload.company || '').trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (honeypot) return response(200, 'Message received');
  if (name.length < 2 || name.length > 100 || !emailPattern.test(email) || email.length > 254 || message.length < 5 || message.length > 3000) {
    return response(400, 'Invalid form data');
  }

  const sheetMonkeyUrl = process.env.SHEETMONKEY_API_URL;
  if (!sheetMonkeyUrl) {
    console.error('SHEETMONKEY_API_URL is not configured');
    return response(503, 'Contact service unavailable');
  }

  try {
    const upstream = await fetch(sheetMonkeyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contact: name, email, text: message })
    });

    if (!upstream.ok) {
      console.error('Contact provider returned status', upstream.status);
      return response(502, 'Unable to send message');
    }

    return response(200, 'Message sent');
  } catch (error) {
    console.error('Contact provider request failed', error);
    return response(502, 'Unable to send message');
  }
};

exports._test = { isRateLimited };
