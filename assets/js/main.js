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
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

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
const minimizeButton = document.getElementById('minimize-button');

toggleButton.addEventListener('click', () => {
    formContainer.classList.toggle('minimized');
    if (formContainer.classList.contains('minimized')) {
        toggleButton.innerText = '+';
        minimizeButton.style.display = 'none';
    } else {
        toggleButton.innerText = '-';
        minimizeButton.style.display = 'block'; // Exibe o botão de minimizar ao maximizar
    }
});

minimizeButton.addEventListener('click', () => {
    formContainer.classList.add('minimized');
    toggleButton.innerText = '+';
    minimizeButton.style.display = 'none'; // Oculta o botão de minimizar ao minimizar manualmente
});
/* Formulário responsivo */ 





