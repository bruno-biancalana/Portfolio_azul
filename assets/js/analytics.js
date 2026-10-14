/* ALERTS ESTILIZADOS, PÓS ENVIO DO FORMULÁRIO (Removido do HTML para controle assíncrono via JS) */
const trackPortfolioEvent = (eventName, params = {}) => {
    const payload = {
        page_language: document.documentElement.lang || 'pt-BR',
        page_path: window.location.pathname,
        ...params
    };
    if (typeof gtag === 'function') {
        gtag('event', eventName, payload);
    } else if (window.dataLayer) {
        window.dataLayer.push({ event: eventName, ...payload });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Sistema Avançado e Automático de Rastreamento (Tagging) para GA4 e GTM
    document.addEventListener('click', (e) => {
        // Encontra o elemento de link ou botão clicado mais próximo
        const target = e.target.closest('a, button, [data-track]');
        if (!target) return;

        let category = 'Outros';
        let label = target.getAttribute('data-track') || '';
        const clickText = target.innerText ? target.innerText.trim() : '';
        const clickUrl = target.getAttribute('href') || '';
        const pageLang = document.documentElement.lang || 'pt-BR';

        // 1. Classificação se já possuir data-track explicativo do index.html
        if (label) {
            if (label.startsWith('btn-menu')) category = 'Menu Nav';
            else if (label.startsWith('icon-menu') || label.startsWith('icon-footer')) category = 'Social Links';
            else if (label.startsWith('img-projetos')) category = 'Project Card';
        }

        // 2. Classificação Automática e Inteligente (cobre index_en.html e novos elementos)
        if (!label) {
            // Cliques no Menu de Navegação ou Toggle do Menu
            if (target.closest('.nav__menu') || target.closest('.nav__toggle') || target.classList.contains('nav__link')) {
                category = 'Menu Nav';
                label = `btn-menu-${clickText ? clickText.toLowerCase().replace(/\s+/g, '_') : 'toggle'}`;
            }
            // Redes Sociais da Home
            else if (target.closest('.home__social')) {
                category = 'Social Links';
                const icon = target.querySelector('i') || (target.classList.contains('bx') ? target : null);
                const iconClass = icon ? icon.className : '';
                const networkMatch = iconClass.match(/bxl-(facebook|instagram|linkedin|github|twitter|youtube)/);
                const network = networkMatch ? networkMatch[1] : 'outros';
                label = `icon-menu-${network}`;
            }
            // Redes Sociais do Footer
            else if (target.closest('.footer__social')) {
                category = 'Social Links';
                const icon = target.querySelector('i') || (target.classList.contains('bx') ? target : null);
                const iconClass = icon ? icon.className : '';
                const networkMatch = iconClass.match(/bxl-(facebook|instagram|linkedin|github|twitter|youtube)/);
                const network = networkMatch ? networkMatch[1] : 'outros';
                label = `icon-footer-${network}`;
            }
            // Projetos / Trabalhos
            else if (target.closest('.work__container') || target.classList.contains('work__img')) {
                category = 'Project Card';
                const img = target.querySelector('img');
                const altText = img ? img.getAttribute('alt') : '';
                label = `img-projetos-${altText ? altText.toLowerCase().replace(/[^a-z0-9]+/g, '_') : clickUrl.substring(clickUrl.lastIndexOf('/') + 1)}`;
            }
            // Alternador de Idiomas (Botão English/Português)
            else if (target.classList.contains('button') && (clickText.toLowerCase().includes('english') || clickText.toLowerCase().includes('português'))) {
                category = 'Language Switch';
                label = `btn-lang-${clickText.toLowerCase().includes('english') ? 'en' : 'pt'}`;
            }
            // Formulário de Contato
            else if (target.closest('#form-container')) {
                category = 'Contact Form';
                if (target.id === 'toggle-button') {
                    label = 'btn-contact-close';
                } else if (target.id === 'submit-button' || target.type === 'submit') {
                    label = 'btn-contact-submit';
                } else {
                    label = 'btn-contact-form-click';
                }
            } else if (target.classList.contains('cta__contact')) {
                category = 'Contact Form';
                label = 'btn-contact-open';
            }
        }

        // Eventos de negócio do portfólio: nomes estáveis e fáceis de analisar no GA4
        const analyticsEvent = target.getAttribute('data-analytics');
        if (analyticsEvent) {
            trackPortfolioEvent(analyticsEvent, {
                link_url: clickUrl || undefined,
                link_text: clickText || undefined,
                target_language: target.getAttribute('data-language-target') || undefined
            });
        } else if (/linkedin\.com/.test(clickUrl)) {
            trackPortfolioEvent('linkedin_click', { link_url: clickUrl });
        } else if (/github\.com\/bruno-biancalana/.test(clickUrl)) {
            trackPortfolioEvent('github_click', { link_url: clickUrl });
        }

        // 3. Um único envio por evento. O gtag já utiliza o dataLayer internamente.
        const clickPayload = {
            click_category: category,
            click_label: label || 'unlabeled_click',
            click_text: clickText || 'no_text',
            click_url: clickUrl || 'no_url',
            page_language: pageLang
        };

        if (typeof gtag === 'function') {
            gtag('event', 'custom_click', clickPayload);
            if (label) gtag('event', 'button_click', { button_label: label });
        } else if (window.dataLayer) {
            window.dataLayer.push({ event: 'custom_click', ...clickPayload });
            if (label) window.dataLayer.push({ event: 'button_click', button_label: label });
        }
    });
});
