// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP animations
    initAnimations();

    // Initialize theme toggle functionality
    initThemeToggle();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize scroll-based interactions
    initScrollInteractions();

    // Initialize cursor follower
    initCursorFollower();

    // Initialize bento grid hover effects
    initBentoHoverEffects();
});

// Initialize GSAP animations
function initAnimations() {
    // Hero section fade in
    gsap.from('.hero-text h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-text p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    gsap.from('.hero-animation', {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Stagger animation for sections
    gsap.from('.section-header', {
        scrollTrigger: {
            trigger: '.section-header',
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Bento grid items animation
    gsap.from('.bento-item', {
        scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // About section animation
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out'
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');

    // Check for saved theme preference or respect OS theme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme.matches)) {
        document.body.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        // Toggle theme
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

// Scroll-based interactions
function initScrollInteractions() {
    // Header scroll effect
    const header = document.querySelector('.header');
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Show/hide back to top button
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button click handler
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Cursor follower
function initCursorFollower() {
    const cursor = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button');

    document.addEventListener('mousemove', (e) => {
        // Update cursor position with a slight delay for smooth effect
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });

        // Make cursor visible when mouse moves
        if (!cursor.classList.contains('active')) {
            cursor.classList.add('active');
        }
    });

    // Add hover effect when hovering over interactive elements
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });

        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Hide cursor follower when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
}

// Bento hover effects
function initBentoHoverEffects() {
    const bentoItems = document.querySelectorAll('.bento-item');

    bentoItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            // Get position relative to the element
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update CSS variables for the hover effect
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}