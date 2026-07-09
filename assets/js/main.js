/* ALERTS ESTILIZADOS, PÓS ENVIO DO FORMULÁRIO (Removido do HTML para controle assíncrono via JS) */
document.addEventListener('DOMContentLoaded', () => {
    
    const trackableButtons = document.querySelectorAll('[data-track]');
  
    trackableButtons.forEach(button => {
      button.addEventListener('click', () => {
        const eventLabel = button.getAttribute('data-track');
        
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'button_click',
            button_label: eventLabel,
          });
        }
      });
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

// Envio assíncrono do formulário com SweetAlert2
const contactForm = document.querySelector('#form-container form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitButton ? submitButton.innerText : 'Enviar';
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerText = document.documentElement.lang === 'en' ? 'Sending...' : 'Enviando...';
        }

        fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            redirect: 'manual'
        })
        .then(response => {
            // Com redirect: 'manual', o navegador não segue o redirecionamento 302 do SheetMonkey,
            // evitando erro de CORS. A resposta resolvida terá status 0 ou tipo 'opaqueredirect'.
            if (response.ok || response.status === 0 || response.type === 'opaqueredirect') {
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
        })
        .catch(error => {
            console.error('Form submission error:', error);
            Swal.fire({
                icon: 'error',
                title: document.documentElement.lang === 'en' ? 'Oops...' : 'Ops...',
                text: document.documentElement.lang === 'en' 
                    ? 'Something went wrong while sending the message. Please try again.' 
                    : 'Algo deu errado ao enviar a mensagem. Por favor, tente novamente.'
            });
        })
        .finally(() => {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerText = originalBtnText;
            }
        });
    });
}
/* Formulário responsivo */ 





