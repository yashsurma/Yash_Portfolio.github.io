/----------Toggle Icone---------/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/----------Scroll Section---------/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });
    /----------Sticky Section---------/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /----------remove toggle and navbar Section---------/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/----------Sticky Section---------/
ScrollReveal({
    reset: true,
    distance: '15px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.header, .home-content, heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right'});

/----------Sticky Section---------/
const typed = new Typed('.multiple-text',{
    strings: ['Full Stack Developer', 'Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


