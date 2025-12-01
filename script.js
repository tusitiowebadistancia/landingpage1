// Toggle menú mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('is-open');
    });

    // Cerrar menú al hacer click en un enlace
    navMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('header__nav-link')) {
            navMenu.classList.remove('is-open');
        }
    });
}

// Scroll suave para elementos con data-scroll
const scrollLinks = document.querySelectorAll('[data-scroll]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetSelector = link.dataset.target || link.getAttribute('href');
        if (!targetSelector || !targetSelector.startsWith('#')) return;

        const target = document.querySelector(targetSelector);
        if (!target) return;

        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// FAQ acordeón
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    const icon = item.querySelector('.faq__icon');

    question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('is-open');

        // cerrar todos
        faqItems.forEach(i => {
            i.querySelector('.faq__answer').classList.remove('is-open');
            i.querySelector('.faq__icon').textContent = '+';
        });

        if (!isOpen) {
            answer.classList.add('is-open');
            icon.textContent = '–';
        } else {
            answer.classList.remove('is-open');
            icon.textContent = '+';
        }
    });
});

// Validación simple de formulario
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const inputsRequired = ['nombre', 'email', 'telefono', 'mensaje'];

        inputsRequired.forEach(id => {
            const input = document.getElementById(id);
            const group = input.closest('.form__group');
            const error = group.querySelector('.form__error');

            input.classList.remove('is-invalid');
            error.classList.remove('is-visible');

            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
                error.classList.add('is-visible');
            } else if (id === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) {
                isValid = false;
                input.classList.add('is-invalid');
                error.textContent = 'Ingresá un email válido.';
                error.classList.add('is-visible');
            }
        });

        if (!isValid) return;

        // Acá podrías conectar con tu backend o servicio de email
        alert('Gracias por tu consulta. Te contactaremos a la brevedad.');
        form.reset();
    });
}

// Año dinámico en el footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
