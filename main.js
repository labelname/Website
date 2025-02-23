// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navigation menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Hero parallax effect
gsap.to('.hero', {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Model cards reveal animation
const modelCards = gsap.utils.toArray('.model-card');
modelCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: 'power4.out'
    });
});

// Smooth scroll progress indicator
gsap.to('body', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            const progress = self.progress.toFixed(3) * 100;
            document.documentElement.style.setProperty('--scroll', `${progress}%`);
        }
    }
});

// Image parallax effect
const images = gsap.utils.toArray('.card-image img');
images.forEach(img => {
    gsap.to(img, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});
