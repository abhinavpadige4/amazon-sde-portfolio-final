// Main JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active section highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    function updateActiveSection() {
        let scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Update active section on scroll and load
    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('load', updateActiveSection);
    
    // Add active class styling
    const style = document.createElement('style');
    style.textContent = `
        a.active {
            position: relative;
        }
        a.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--dark-primary);
        }
        body.light-theme a.active::after {
            background: var(--light-primary);
        }
    `;
    document.head.appendChild(style);
    
    // Intersection Observer for fade-in animations
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    
    // Add fade-in class to sections for animation
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Add CSS for fade-in animations
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in.appear {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Staggered animation for timeline items */
        .timeline-item {
            opacity: 0;
            transform: translateX(-20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .timeline-item.appear {
            opacity: 1;
            transform: translateX(0);
        }
        
        /* Stagger delays */
        .timeline-item:nth-child(1) { transition-delay: 0.1s; }
        .timeline-item:nth-child(2) { transition-delay: 0.2s; }
        .timeline-item:nth-child(3) { transition-delay: 0.3s; }
    `;
    document.head.appendChild(fadeStyle);
    
    // Observe timeline items for staggered animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        appearOnScroll.observe(item);
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
    
    // Add hover effects to skill bars
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Handle form input focus effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close any potential modals (if implemented)
        if (e.key === 'Escape') {
            // Close modals or dropdowns if any
        }
        
        // Tab key handling for better accessibility
        if (e.key === 'Tab') {
            // Add focus-visible class for custom focus styles
            document.body.classList.add('user-is-tabbing');
            
            // Remove after a short delay
            window.setTimeout(() => {
                document.body.classList.remove('user-is-tabbing');
            }, 100);
        }
    });
    
    // Add focus-visible styling
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .user-is-tabbing button:focus,
        .user-is-tabbing input:focus,
        .user-is-tabbing textarea:focus,
        .user-is-tabbing a:focus,
        .user-is-tabbing [tabindex]:focus[tabindex="-1"] {
            outline: 2px solid var(--dark-primary);
            outline-offset: 2px;
        }
        
        body.light-theme .user-is-tabbing button:focus,
        body.light-theme .user-is-tabbing input:focus,
        body.light-theme .user-is-tabbing textarea:focus,
        body.light-theme .user-is-tabbing a:focus,
        body.light-theme .user-is-tabbing [tabindex]:focus[tabindex="-1"] {
            outline: 2px solid var(--light-primary);
            outline-offset: 2px;
        }
        
        /* Custom focus styles for better visibility */
        button:focus-visible,
        input:focus-visible,
        textarea:focus-visible,
        a:focus-visible {
            outline: 2px solid var(--dark-primary);
            outline-offset: 2px;
        }
        
        body.light-theme button:focus-visible,
        body.light-theme input:focus-visible,
        body.light-theme textarea:focus-visible,
        body.light-theme a:focus-visible {
            outline: 2px solid var(--light-primary);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(focusStyle);
    
    // Add lazy loading for images (if supported)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading]');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    } else {
        // Fallback for browsers that don't support native lazy loading
        // Could implement Intersection Observer based lazy loading here
    }
    
    // Add accessibility enhancements
    // Ensure all interactive elements have proper aria labels
    const interactiveElements = document.querySelectorAll('button, [role="button"], [tabindex]');
    interactiveElements.forEach(el => {
        if (!el.getAttribute('aria-label') && !el.innerText.trim() && !el.getAttribute('aria-labelledby')) {
            // Add aria-label if element relies solely on icons
            const icon = el.querySelector('i, svg');
            if (icon) {
                // Common icon interpretations
                const iconClass = icon.className;
                if (iconClass.includes('fa-moon') || iconClass.includes('fa-sun')) {
                    el.setAttribute('aria-label', el.getAttribute('aria-label') || 'Toggle theme');
                } else if (iconClass.includes('fa-envelope')) {
                    el.setAttribute('aria-label', el.getAttribute('aria-label') || 'Email');
                } else if (iconClass.includes('fa-phone')) {
                    el.setAttribute('aria-label', el.getAttribute('aria-label') || 'Phone');
                } else if (iconClass.includes('fa-linkedin')) {
                    el.setAttribute('aria-label', el.getAttribute('aria-label') || 'LinkedIn');
                } else if (iconClass.includes('fa-github')) {
                    el.setAttribute('aria-label', el.getAttribute('aria-label') || 'GitHub');
                }
            }
        }
    });
    
    // Add skip to main content link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.position = 'fixed';
    skipLink.style.top = '-40px';
    skipLink.style.left = '0';
    skipLink.style.background = 'var(--dark-primary)';
    skipLink.style.color = 'var(--dark-bg)';
    skipLink.style.padding = '8px 16px';
    skipLink.style.borderRadius = 'var(--radius-md)';
    skipLink.style.zIndex = '1000';
    skipLink.style.transition = 'top 0.3s ease';
    skipLink.style.textDecoration = 'none';
    skipLink.style.fontWeight = '600';
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content wrapper for skip link
    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';
    // Wrap all content except the skip link
    const bodyContent = document.body.innerHTML;
    document.body.innerHTML = skipLink.outerHTML + '<div id="main-content">' + bodyContent + '</div>';
    
    // Add skip link styling
    const skipStyle = document.createElement('style');
    skipStyle.textContent = `
        .skip-link {
            background: var(--dark-primary);
            color: var(--dark-bg);
        }
        
        body.light-theme .skip-link {
            background: var(--light-primary);
            color: var(--light-bg);
        }
        
        .skip-link:hover {
            background: var(--dark-accent);
            color: var(--dark-bg);
        }
        
        body.light-theme .skip-link:hover {
            background: var(--light-accent);
            color: var(--light-bg);
        }
    `;
    document.head.appendChild(skipStyle);
});