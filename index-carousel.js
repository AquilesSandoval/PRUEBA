// AIYM Training System - Carousel and Modern Dashboard Scripts

// Carrusel de imágenes
class Carousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.slides = this.container.querySelectorAll('.carousel-slide');
        this.dots = this.container.querySelectorAll('.carousel-dot');
        this.currentSlide = 0;
        this.autoplayInterval = null;
        
        this.init();
    }
    
    init() {
        // Event listeners para los dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Iniciar autoplay
        this.startAutoplay();
        
        // Pausar en hover
        this.container.addEventListener('mouseenter', () => this.stopAutoplay());
        this.container.addEventListener('mouseleave', () => this.startAutoplay());
    }
    
    goToSlide(index) {
        // Remover clase active de la slide actual
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // Actualizar índice
        this.currentSlide = index;
        
        // Agregar clase active a la nueva slide
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        let next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Cambiar cada 5 segundos
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

// Animaciones de entrada
function animateOnScroll() {
    const elements = document.querySelectorAll('.modern-card, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
}

// Contador animado para estadísticas
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(start);
        }
    }, 16);
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar carrusel
    const carousel = new Carousel('heroCarousel');
    
    // Inicializar animaciones
    animateOnScroll();
    
    // Animar contadores de estadísticas si existen
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-value'));
        if (target) {
            animateCounter(stat, target);
        }
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Utilidad para formatear fechas
function formatDate(date) {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const d = new Date(date);
    return `${d.getDate()} de ${months[d.getMonth()]}`;
}

// Exportar funciones para uso global
window.AIYM = {
    Carousel,
    animateOnScroll,
    animateCounter,
    formatDate
};
