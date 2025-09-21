
// Mobile menu toggle functionality
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.getElementById('navMenu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
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

// Add scroll animation effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all product categories and service cards
document.querySelectorAll('.product-category, .service-card').forEach(el => {
    observer.observe(el);
});

// Dynamic greeting based on time of day
const currentHour = new Date().getHours();
let greeting = 'Welcome to';

if (currentHour < 12) {
    greeting = 'Good Morning! Welcome to';
} else if (currentHour < 17) {
    greeting = 'Good Afternoon! Welcome to';
} else {
    greeting = 'Good Evening! Welcome to';
}

// Update hero title
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    heroTitle.textContent = `${greeting} Sachin Cyber Services`;
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});