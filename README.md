# Bruno Biancalana - Portfolio 🚀

Personal portfolio website showcasing web development projects and technical skills. Built with modern web technologies and best practices for accessibility and performance.

🔗 **[Live Demo](https://bruno-biancalana-dev.netlify.app/)**

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Security](#security)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Contributing](#contributing)
- [Contact](#contact)

---

## About

A responsive and modern personal portfolio website developed with HTML, CSS, SCSS, and JavaScript. This project showcases my best work, technical skills, and provides an easy way for potential clients and employers to get in touch.

**Key Highlights:**
- 🌐 Bilingual support (Portuguese/English)
- ♿ WCAG accessibility compliant
- ⚡ Performance optimized with lazy loading
- 🔒 Security best practices implemented
- 📱 Fully responsive design

---

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Bilingual Support** - Portuguese and English versions
- **Accessibility** - ARIA labels, skip links, keyboard navigation support
- **Performance** - Lazy loading for images, optimized CSS
- **Contact Form** - Integrated with SheetMonkey API for message collection
- **Analytics** - Google Analytics 4 integration with custom event tracking
- **SEO Optimized** - Meta tags, Open Graph, structured data

---

## Technologies Used

- **HTML5** - Semantic structure and accessibility
- **CSS3** - Modern styling with custom properties
- **SCSS** - CSS preprocessor for better organization
- **JavaScript (Vanilla)** - Interactivity and dynamic features
- **SheetMonkey API** - Contact form integration
- **Google Analytics 4** - Analytics and event tracking
- **ScrollReveal** - Scroll animations
- **SweetAlert2** - Beautiful alert notifications
- **Boxicons** - Icon library
- **Netlify** - Deployment and hosting

---

## Project Structure

```
portfolio/
├── index.html              # Main page (Portuguese)
├── index_en.html           # English version
├── assets/
│   ├── css/
│   │   └── styles.css     # Compiled CSS
│   ├── scss/
│   │   └── styles.scss    # SCSS source files
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── img/               # Project images and assets
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── README.md             # This file
├── SECURITY.md           # Security guidelines
└── robots.txt            # SEO robots configuration
```

### Directory Overview

- **assets/css/** - Compiled CSS stylesheets
- **assets/scss/** - SCSS source files for development
- **assets/js/** - JavaScript files for interactivity
- **assets/img/** - Images and media assets

---

## Setup and Installation

### Prerequisites

- Git installed
- Code editor (VS Code recommended)
- Modern web browser

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/bruno-biancalana/portfolio.git
   cd portfolio
   ```

2. **Configure environment variables** (optional)
   ```bash
   cp .env.example .env
   ```
   Add your API keys in the `.env` file if needed

3. **Open the project**
   - Open `index.html` in your browser, or
   - Use VS Code with "Live Server" extension

---

## Usage

### Local Development

1. Open `index.html` in your browser
2. Navigate through the page and interact with elements
3. Test the contact form functionality
4. Check responsiveness using browser dev tools

### Customization

- **Edit `index.html`** - Modify content and structure
- **Edit `index_en.html`** - Modify English version content
- **Modify `assets/scss/styles.scss`** - Customize colors, fonts, and layout
- **Update `assets/js/main.js`** - Add new features and functionality

---

## Deployment

### Netlify (Recommended)

1. **Connect your repository**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository

2. **Configure build settings**
   - Build command: (leave empty for static site)
   - Publish directory: `.` (root directory)

3. **Environment variables**
   - Add any required API keys in "Environment variables" section

4. **Automatic deployment**
   - Every push to main branch triggers automatic deployment

### Other Platforms

- **GitHub Pages** - Enable in Settings > Pages
- **Vercel** - Import project from Git
- **Firebase** - `firebase deploy`

---

## Security

### Security Best Practices Implemented

- ✅ API endpoints moved from HTML to JavaScript
- ✅ Environment variables for sensitive data
- ✅ Proper `.gitignore` configuration
- ✅ No hardcoded credentials in code
- ✅ HTTPS enforced in production

### Security Guidelines

See [SECURITY.md](SECURITY.md) for detailed security information and vulnerability reporting guidelines.

---

## Accessibility

### WCAG Compliance

This project follows WCAG 2.1 Level AA guidelines:

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Skip to content link
- ✅ Proper color contrast
- ✅ Form labeling and error handling
- ✅ Alt text for images
- ✅ Focus indicators

### Accessibility Features

- **Skip Link** - Allows keyboard users to skip navigation
- **ARIA Labels** - Descriptive labels for interactive elements
- **Semantic HTML** - Proper use of headings, landmarks, and regions
- **Form Accessibility** - Proper labeling and required field indicators
- **Focus Management** - Visible focus states for keyboard navigation

---

## Performance

### Optimization Implemented

- ✅ Lazy loading for images
- ✅ Optimized CSS with custom properties
- ✅ Minimal external dependencies
- ✅ Efficient JavaScript with event delegation
- ✅ Responsive images with appropriate sizing

### Performance Metrics

- **Lighthouse Score**: Target 90+ in all categories
- **Image Optimization**: Lazy loading and proper formatting
- **CSS Optimization**: Minified production builds
- **JavaScript Efficiency**: Debounced scroll events, optimized selectors

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create a branch** for your feature (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Commit Convention

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `a11y:` - Accessibility improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

---

## Contact

- **Portfolio:** [bruno-biancalana-dev.netlify.app](https://bruno-biancalana-dev.netlify.app/)
- **GitHub:** [@bruno-biancalana](https://github.com/bruno-biancalana)
- **LinkedIn:** [Bruno Biancalana](https://www.linkedin.com/in/bruno-biancalana-a828b5182)
- **Email:** Use the contact form on the portfolio

---

## License

This project is for personal and educational use.

---

**Last Updated:** July 2026
