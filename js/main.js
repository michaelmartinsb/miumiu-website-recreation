/**
 * Miu Miu Website JavaScript
 * Handles interactive elements like popups, navigation behavior, and user preferences
 */

// DOM Elements
const newsletterPopup = document.getElementById('newsletterPopup');
const closePopupBtn = document.getElementById('closePopup');
const cookieNotice = document.getElementById('cookieNotice');
const acceptCookiesBtn = document.getElementById('acceptCookies');
const cookieSettingsBtn = document.getElementById('cookieSettings');
const header = document.querySelector('.header');
const mainNav = document.querySelector('.main-nav');
const menuTrigger = document.querySelector('.menu-trigger');

// Show newsletter popup after 5 seconds
setTimeout(() => {
    if (localStorage.getItem('newsletterClosed') !== 'true') {
        newsletterPopup.style.display = 'flex';
    }
}, 5000);

// Close newsletter popup
closePopupBtn.addEventListener('click', () => {
    newsletterPopup.style.display = 'none';
    localStorage.setItem('newsletterClosed', 'true');
});

// Handle cookie notice
acceptCookiesBtn.addEventListener('click', () => {
    cookieNotice.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
});

cookieSettingsBtn.addEventListener('click', () => {
    // In a real implementation, this would open cookie settings
    alert('Cookie settings would open here');
});

// Check if cookies already accepted
if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieNotice.style.display = 'none';
}

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email && isValidEmail(email)) {
            // In a real implementation, this would submit to a backend service
            alert(`Thank you for subscribing with ${email}`);
            newsletterPopup.style.display = 'none';
            localStorage.setItem('newsletterSubscribed', 'true');
        } else {
            alert('Please enter a valid email address');
        }
    });
}

// Validate email format
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle menu
if (menuTrigger) {
    menuTrigger.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuTrigger.classList.toggle('active');
    });
}

// Header behavior on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Trigger header transition on scroll
    if (currentScrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Add shadow on scroll
    if (currentScrollTop > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = currentScrollTop;
});

// Image lazy loading implementation
document.addEventListener('DOMContentLoaded', function() {
    // Check for browser support of native lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        // Use native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers without native lazy loading
        const lazyImages = document.querySelectorAll('img.lazy');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const image = entry.target;
                        image.src = image.dataset.src;
                        image.classList.remove('lazy');
                        imageObserver.unobserve(image);
                    }
                });
            });
            
            lazyImages.forEach(image => {
                imageObserver.observe(image);
            });
        } else {
            // Fallback for browsers without Intersection Observer
            let lazyLoadThrottleTimeout;
            
            function lazyLoad() {
                if (lazyLoadThrottleTimeout) {
                    clearTimeout(lazyLoadThrottleTimeout);
                }
                
                lazyLoadThrottleTimeout = setTimeout(function() {
                    const scrollTop = window.pageYOffset;
                    lazyImages.forEach(function(img) {
                        if (img.offsetTop < (window.innerHeight + scrollTop)) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                        }
                    });
                    if (lazyImages.length == 0) {
                        document.removeEventListener('scroll', lazyLoad);
                        window.removeEventListener('resize', lazyLoad);
                        window.removeEventListener('orientationChange', lazyLoad);
                    }
                }, 20);
            }
            
            document.addEventListener('scroll', lazyLoad);
            window.addEventListener('resize', lazyLoad);
            window.addEventListener('orientationChange', lazyLoad);
        }
    }
});