// Navegación móvil
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Cerrar menú al hacer click en un enlace
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}

// Año dinámico en el footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Botones de WhatsApp (hero + contacto)
// Puedes cambiar el número una sola vez aquí:
const WHATSAPP_URL = "https://wa.me/5491141999497?text=Hola,%20quiero%20hacer%20una%20consulta%20legal";

const heroWhatsapp = document.getElementById('hero-whatsapp');
const contactWhatsapp = document.getElementById('contact-whatsapp');

if (heroWhatsapp) {
    heroWhatsapp.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(WHATSAPP_URL, '_blank');
    });
}

if (contactWhatsapp) {
    contactWhatsapp.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(WHATSAPP_URL, '_blank');
    });
}

// Animación simple de aparición al hacer scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

// Aplica la clase .reveal a ciertas secciones si querés efecto
document.querySelectorAll('.section, .hero').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Previene envío real del formulario (demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Tu consulta fue enviada. Nos pondremos en contacto a la brevedad.');
        contactForm.reset();
    });
}
