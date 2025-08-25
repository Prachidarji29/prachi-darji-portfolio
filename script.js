// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);

    // Portfolio pagination dots functionality
    const dots = document.querySelectorAll('.dot');
    const projectCards = document.querySelectorAll('.project-card');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            // Add active class to clicked dot
            this.classList.add('active');
            
            // Show corresponding project (if you want to implement carousel)
            // For now, just highlight the dot
        });
    });

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Contact form functionality
    const contactForm = document.querySelector('.contact-form');
    const emailInput = document.querySelector('.email-input');
    const sendBtn = document.querySelector('.send-btn');
    
    if (sendBtn) {
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Show success message
                showNotification('Thank you! I\'ll get back to you soon.', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }

    // Newsletter form functionality
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-btn');
    
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                showNotification('Successfully subscribed to newsletter!', 'success');
                newsletterInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }

    // Hire me buttons functionality
    const hireButtons = document.querySelectorAll('.hire-me-btn, .footer-hire-btn');
    
    hireButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Scroll to contact section or show contact modal
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // If no contact section, scroll to CTA section
                const ctaSection = document.querySelector('.cta-section');
                if (ctaSection) {
                    ctaSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // See All button functionality
    const seeAllBtn = document.querySelector('.see-all-btn');
    
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', function() {
            // You can implement a modal or redirect to a full portfolio page
            showNotification('Portfolio page coming soon!', 'info');
        });
    }

    // Service card arrow buttons
    const serviceButtons = document.querySelectorAll('.service-button');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceTitle = serviceCard.querySelector('h3').textContent;
            
            // You can implement service details modal or navigation
            showNotification(`Viewing ${serviceTitle} details...`, 'info');
        });
    });

    // Timeline animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Skills animation on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);
    
    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        skillsObserver.observe(item);
    });

    // Project showcase animation
    const projectShowcases = document.querySelectorAll('.project-showcase');
    
    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    projectShowcases.forEach(showcase => {
        showcase.style.opacity = '0';
        showcase.style.transform = 'translateY(50px)';
        showcase.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        projectObserver.observe(showcase);
    });

    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinksContainer.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    const profileBackground = document.querySelector('.profile-background');
    
    if (heroSection && profileBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled <= heroSection.offsetHeight) {
                profileBackground.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Typing effect for hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect when page loads
        setTimeout(typeWriter, 1000);
    }
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = '#4CAF50';
            break;
        case 'error':
            notification.style.background = '#f44336';
            break;
        case 'info':
        default:
            notification.style.background = '#2196F3';
            break;
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #FD6F00 !important;
        font-weight: 800;
    }
    
    .notification {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 20px;
            transform: translateY(-100%);
            transition: transform 0.3s ease;
        }
        
        .nav-links.active {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
