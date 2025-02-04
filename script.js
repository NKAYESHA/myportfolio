/* ----- NAVIGATION MENU TOGGLE FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {
    headerShadow();
};

function headerShadow() {
    const navHeader = document.getElementById("header");
    if (window.scrollY > 50) {
        navHeader.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.1)";
        navHeader.style.height = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
    }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "UI/UX Designer", "Creative Thinker"],
    loop: true,
    typeSpeed: 120,
    backSpeed: 90,
    backDelay: 1800
});

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    reset: false
});

/* ----- APPLYING SCROLL REVEAL TO SECTIONS ----- */
sr.reveal('.featured-text', { delay: 100 });
sr.reveal('.featured-image', { delay: 200 });
sr.reveal('.top-header', { delay: 150 });
sr.reveal('.about-info', { delay: 200 });

/* ----- PROJECTS SCROLL REVEAL ----- */
sr.reveal('.project-box', { interval: 200 });

/* ----- CONTACT SECTION SCROLL REVEAL ----- */
sr.reveal('.contact-info', { delay: 100 });

/* ----- CHANGING ACTIVE LINK ON SCROLL ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);
