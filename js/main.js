// js/main.js

// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const mainContent = document.querySelector('.main-content');
const productsPage = document.querySelector('.products-page');
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// Mobile menu toggle
mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Mobile dropdown toggle
document.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');

    if (dropdown && window.innerWidth <= 768) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            item.classList.toggle('mobile-dropdown-open');
        });
    }
});

// Navigation handler for main nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Don't prevent default for dropdown parent
        if (link.querySelector('.dropdown-icon')) {
            return;
        }

        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Close mobile menu
        navMenu.classList.remove('active');

        if (link.dataset.page === 'products') {
            // Show products page
            mainContent.style.display = 'none';
            productsPage.style.display = 'block';
            updateProductDetails('premium'); // Default product
        } else if (link.dataset.page === 'main') {
            // Show main content
            mainContent.style.display = 'block';
            productsPage.style.display = 'none';
        } else if (link.dataset.section) {
            // Smooth scroll to section
            mainContent.style.display = 'block';
            productsPage.style.display = 'none';
            const section = document.getElementById(link.dataset.section);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Navigation handler for dropdown items
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all main nav links
        navLinks.forEach(l => l.classList.remove('active'));
        navMenu.classList.remove('active');

        if (item.dataset.page === 'products') {
            const productId = item.dataset.product;
            const product = getProductById(productId); // From products.js

            if (product) {
                mainContent.style.display = 'none';
                productsPage.style.display = 'block';
                renderProductDetail(product); // New function
            }
        } else if (item.dataset.section) {
            mainContent.style.display = 'block';
            productsPage.style.display = 'none';
            const section = document.getElementById(item.dataset.section);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

function renderProductDetail(product) {
    // Breadcrumb
    const breadcrumbNav = document.querySelector('.breadcrumb-nav');
    breadcrumbNav.innerHTML = `
        <a href="#" data-page="main">Home</a>
        <span>/</span>
        <span>${product.name}</span>
    `;

    // Product title
    document.getElementById('productTitle').textContent = product.name;

    // Product description
    document.getElementById('productDesc').innerHTML = product.desc.map(each => `<p>${each}</p>`).join('');

    // Features/specs
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = product.specs.map(spec =>
        `<li><span class="spec-label">${spec.label}:</span> <span class="spec-value">${spec.value}</span></li>`
    ).join('');

    // Main Image & Thumbnails
    const mainImage = document.getElementById('mainImage');
    // mainImage.style.background = `url('${product.image}') center/cover no-repeat`;
    mainImage.innerHTML = `<img src='${product.image}' class="product-banner" />`;

    const thumbnailsContainer = document.getElementById('productThumb');
    thumbnailsContainer.innerHTML = product.paths.map((each, i) => {
        return (
            `<div class="thumbnail active">
            <image data-path='${each}' src='${each}' />
            </div>`
        )
    }).join('');

    // Thumbnail click functionality
    thumbnailsContainer.querySelectorAll('.thumbnail').forEach((thumb) => {
        thumb.addEventListener('click', () => {
            const image = thumb.getElementsByTagName('img');
            if (image && image[0]) {
                mainImage.innerHTML = `<img src='${image[0].dataset.path}' class="product-banner" />`;

            }
        });
    });
}

// Function to update product details based on selection
function updateProductDetails(productType) {
    const productData = {
        premium: {
            title: 'Premium Solution A',
            price: '$299.00',
            breadcrumb: 'Premium Solution A'
        },
        innovation: {
            title: 'Innovation Series B',
            price: '$199.00',
            breadcrumb: 'Innovation Series B'
        },
        elite: {
            title: 'Elite Collection C',
            price: '$449.00',
            breadcrumb: 'Elite Collection C'
        },
        smart: {
            title: 'Smart Choice D',
            price: '$159.00',
            breadcrumb: 'Smart Choice D'
        },
        professional: {
            title: 'Professional Grade E',
            price: '$359.00',
            breadcrumb: 'Professional Grade E'
        }
    };

    const product = productData[productType] || productData.premium;

    // Update product details
    document.querySelector('.product-title').textContent = product.title;
    document.querySelector('.product-price-detail').textContent = product.price;
    document.querySelector('.breadcrumb-nav span:last-child').textContent = product.breadcrumb;
}

// Banner slider functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slides
setInterval(nextSlide, 5000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Product slider functionality
const productSlider = document.getElementById('productSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPosition = 0;
const slideWidth = 330; // 300px + 30px margin

prevBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition -= slideWidth;
        productSlider.style.transform = `translateX(-${currentPosition}px)`;
    }
});

nextBtn.addEventListener('click', () => {
    const maxPosition = (productSlider.children.length - 3) * slideWidth;
    if (currentPosition < maxPosition) {
        currentPosition += slideWidth;
        productSlider.style.transform = `translateX(-${currentPosition}px)`;
    }
});

// Product gallery functionality
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        // Change main image gradient based on selection
        const gradients = [
            'linear-gradient(45deg, #f44336, #ff5722)',
            'linear-gradient(45deg, #d32f2f, #e53935)',
            'linear-gradient(45deg, #c62828, #f44336)',
            'linear-gradient(45deg, #b71c1c, #d32f2f)'
        ];
        mainImage.style.background = gradients[index];
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = counter.textContent;
        const numericTarget = parseInt(target.replace(/\D/g, ''));
        const suffix = target.replace(/\d/g, '');
        let current = 0;
        const increment = numericTarget / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 40);
    });
}

// Trigger counter animation when mission section is visible
const missionSection = document.getElementById('mission');
const missionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            missionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (missionSection) {
    missionObserver.observe(missionSection);
}

// Smooth navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Add some interactive hover effects
document.querySelectorAll('.product-slide').forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        slide.style.transform = 'translateY(-15px) scale(1.02)';
    });

    slide.addEventListener('mouseleave', () => {
        slide.style.transform = 'translateY(0) scale(1)';
    });
});

// Map placeholder click handler
document.querySelector('.map-placeholder').addEventListener('click', () => {
    // In a real implementation, this would open Google Maps
    alert('Opening Google Maps... (This would link to your actual location)');
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Show main content by default
    mainContent.style.display = 'block';
    productsPage.style.display = 'none';

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Responsive product slider adjustment
function adjustSlider() {
    const containerWidth = document.querySelector('.container').offsetWidth;
    const slideWidth = window.innerWidth > 768 ? 330 : (window.innerWidth > 480 ? 310 : 270);
    const visibleSlides = Math.floor(containerWidth / slideWidth);

    // Reset position on resize
    currentPosition = 0;
    productSlider.style.transform = 'translateX(0px)';
}

window.addEventListener('resize', adjustSlider);
adjustSlider(); // Initial call