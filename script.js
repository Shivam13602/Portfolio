// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#64ffda' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#64ffda',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.borderColor = 'var(--secondary-color)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.borderColor = 'var(--glassmorphism)';
    });
});

// Avatar Animation
document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.querySelector('.avatar-3d');
    const colors = [
        ['#64ffda', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#D4A5A5'],  // Default
        ['#FF6B6B', '#FFA07A', '#FFD700', '#FFA500', '#FF8C00', '#FF4500'],  // Warm
        ['#4ECDC4', '#00CED1', '#20B2AA', '#48D1CC', '#40E0D0', '#7FFFD4'],  // Cool
        ['#9B59B6', '#8E44AD', '#9B59B6', '#8E44AD', '#9B59B6', '#8E44AD'],  // Purple
        ['#2ECC71', '#27AE60', '#2ECC71', '#27AE60', '#2ECC71', '#27AE60']   // Green
    ];

    let currentColorScheme = 0;
    const animations = ['spin-x', 'spin-y', 'spin-z'];
    let lastAnimation = '';

    // Click animation
    avatar.addEventListener('click', () => {
        // Remove previous animation class
        animations.forEach(anim => avatar.classList.remove(anim));
        
        // Select new random animation (different from last one)
        let newAnimation;
        do {
            newAnimation = animations[Math.floor(Math.random() * animations.length)];
        } while (newAnimation === lastAnimation);
        
        lastAnimation = newAnimation;
        
        // Apply new animation
        avatar.classList.add(newAnimation);
        
        // Change color scheme
        currentColorScheme = (currentColorScheme + 1) % colors.length;
        const faces = document.querySelectorAll('.avatar-face');
        faces.forEach((face, index) => {
            face.style.background = colors[currentColorScheme][index];
        });
        
        // Remove animation class after it completes
        setTimeout(() => {
            avatar.classList.remove(newAnimation);
        }, 1000);
    });
});

// Navigation frame timing
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // Show full navigation frame initially
    navbar.classList.add('with-background');

    // After 2 seconds, switch to minimal mode
    setTimeout(() => {
        navbar.classList.remove('with-background');
        navbar.classList.add('minimal');
        navLinks.classList.add('minimal');
    }, 2000);

    // Show background on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down and not at top
            navbar.classList.add('with-background');
            navLinks.classList.remove('minimal');
        } else if (scrollTop <= 100) {
            // At or near top
            navbar.classList.remove('with-background');
            navbar.classList.add('minimal');
            navLinks.classList.add('minimal');
        }
        lastScrollTop = scrollTop;
    });
}); 