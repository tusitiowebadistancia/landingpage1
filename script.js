document.addEventListener('DOMContentLoaded', () => {
    // ------------------ MENÚ RESPONSIVE ------------------ //
    const navToggle = document.getElementById('nav-toggle');
    const mainNav   = document.getElementById('nav');

    let navIsOpen = false;

    function openNav() {
        if (!mainNav) return;

        mainNav.classList.remove('closing');
        mainNav.classList.add('open');

        // Bloqueamos scroll del fondo
        document.documentElement.classList.add('no-scroll');
        document.body.classList.add('no-scroll');

        navIsOpen = true;
    }

    function closeNav() {
        if (!mainNav || !navIsOpen) return;

        // Animación de salida (clase .closing en CSS)
        mainNav.classList.add('closing');

        setTimeout(() => {
            mainNav.classList.remove('open');
        }, 220);

        setTimeout(() => {
            mainNav.classList.remove('closing');
        }, 450);

        // Volvemos a permitir scroll
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');

        navIsOpen = false;
    }

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            if (!navIsOpen) {
                openNav();
            } else {
                closeNav();
            }
        });

        // Cerrar menú al hacer click en cualquier link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeNav();
            });
        });
    }

    // ------------------ AÑO DINÁMICO EN EL FOOTER ------------------ //
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ------------------ BOTONES WHATSAPP ------------------ //
    const WHATSAPP_URL = "https://wa.me/5491141999497?text=Hola,%20quiero%20hacer%20una%20consulta%20legal";

    const heroWhatsappBtn    = document.getElementById('hero-whatsapp');
    const contactWhatsappBtn = document.getElementById('contact-whatsapp');

    if (heroWhatsappBtn) {
        heroWhatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(WHATSAPP_URL, '_blank');
        });
    }

    if (contactWhatsappBtn) {
        contactWhatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(WHATSAPP_URL, '_blank');
        });
    }

    // ------------------ ANIMACIÓN REVEAL (OPCIONAL) ------------------ //
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
            threshold: 0.08,
            rootMargin: '0px 0px -10% 0px'
        }
    );

    document.querySelectorAll('.section, .hero').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // ------------------ FORMULARIO (DEMO) ------------------ //
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Tu consulta fue enviada. Nos pondremos en contacto a la brevedad.');
            contactForm.reset();
        });
    }
});
