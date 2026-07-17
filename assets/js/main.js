/* ALERTS ESTILIZADOS, PÓS ENVIO DO FORMULÁRIO (Removido do HTML para controle assíncrono via JS) */
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
                    label = 'btn-contact-toggle';
                } else if (target.id === 'submit-button' || target.type === 'submit') {
                    label = 'btn-contact-submit';
                } else {
                    label = 'btn-contact-form-click';
                }
            }
        }

        // 3. Disparo dos Eventos para o Google Tag Manager / GA4
        if (window.dataLayer) {
            // A: Evento Personalizado Rico (Recomendado para GTM)
            window.dataLayer.push({
                event: 'custom_click',
                click_category: category,
                click_label: label || 'unlabeled_click',
                click_text: clickText || 'no_text',
                click_url: clickUrl || 'no_url',
                page_language: pageLang
            });

            // B: Evento Legado (Garante retrocompatibilidade com tags antigas do GTM)
            if (label) {
                window.dataLayer.push({
                    event: 'button_click',
                    button_label: label
                });
            }
        }

        // C: Envio Direto via Gtag (Garante envio para o GA4 caso não use GTM)
        if (typeof gtag === 'function') {
            gtag('event', 'custom_click', {
                click_category: category,
                click_label: label || 'unlabeled_click',
                click_text: clickText || 'no_text',
                click_url: clickUrl || 'no_url',
                page_language: pageLang
            });

            if (label) {
                gtag('event', 'button_click', {
                    button_label: label
                });
            }
        }
    });
});
  
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== Scroll de links ativos ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/* Formulário responsivo */ 

const formContainer = document.getElementById('form-container');
const toggleButton = document.getElementById('toggle-button');

if (toggleButton && formContainer) {
    toggleButton.addEventListener('click', () => {
        formContainer.classList.toggle('minimized');
        if (formContainer.classList.contains('minimized')) {
            toggleButton.innerText = '+';
        } else {
            toggleButton.innerText = '-';
        }
    });
}

// O navegador envia apenas para a função do próprio site. O endpoint externo
// permanece em uma variável de ambiente no Netlify.
const CONTACT_API_URL = '/api/contact';

// Envio assíncrono do formulário com SweetAlert2
const contactForm = document.querySelector('#form-container form');
if (contactForm) {
    contactForm.action = CONTACT_API_URL;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitButton ? submitButton.innerText : 'Enviar';
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerText = document.documentElement.lang === 'en' ? 'Sending...' : 'Enviando...';
        }

        try {
            const formData = new FormData(contactForm);
            const response = await fetch(CONTACT_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(formData.entries()))
            });

            if (response.ok) {
                if (document.documentElement.lang === 'en') {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Message sent successfully! I will contact you soon ;) ',
                        showConfirmButton: false,
                        timer: 3000
                    });
                } else {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Mensagem enviada com sucesso! Em breve entrarei em contato ;) ',
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
                
                contactForm.reset();
                
                if (formContainer) {
                    formContainer.classList.add('minimized');
                    if (toggleButton) toggleButton.innerText = '+';
                }
            } else {
                throw new Error('Erro na resposta do servidor.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            Swal.fire({
                icon: 'error',
                title: document.documentElement.lang === 'en' ? 'Oops...' : 'Ops...',
                text: document.documentElement.lang === 'en' 
                    ? 'Something went wrong while sending the message. Please try again.' 
                    : 'Algo deu errado ao enviar a mensagem. Por favor, tente novamente.'
            });
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerText = originalBtnText;
            }
        }
    });
}
/* Formulário responsivo */ 





