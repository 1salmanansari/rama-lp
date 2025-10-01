// js/products.js

// Generate HTML using map
const generateProductSlider = () => {
    // Check if products array exists
    if (typeof PUMPS === 'undefined' || !Array.isArray(PUMPS)) {
        console.error('Products array not found. Make sure constant.js is loaded first.');
        return '<div class="product-slider" id="productSlider"><p>No products available</p></div>';
    }

    const productHTML = PUMPS.map(product => `
        <div class="product-slide">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" />
                <button class="view-product" data-product-id="${product.id}">
                    <i class="fa fa-eye"></i>
                    view
                </button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <ul class="features-list">
                    ${product.specs.map(spec =>
        `<li><span class="spec-label">${spec.label}:</span> <span class="spec-value">${spec.value}</span></li>`
    ).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    return productHTML; // Return just the slides, not the wrapper
};

// Function to render products into existing container
const renderProducts = (containerId = 'productSlider') => {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
        return;
    }

    // Check if products array exists
    if (typeof PUMPS === 'undefined' || !Array.isArray(PUMPS)) {
        console.error('Products array not found. Make sure constant.js is loaded first.');
        container.innerHTML = '<p>No products available</p>';
        return;
    }

    container.innerHTML = PUMPS.map(product => `
        <div class="product-slide">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" />
                <button class="view-product" data-product-id="${product.id}">
                    <i class="fa fa-eye"></i>
                    view
                </button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <ul class="features-list">
                   ${product.specs.map(spec =>
        `<li><span class="spec-label">${spec.label}:</span> <span class="spec-value">${spec.value}</span></li>`
    ).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Add event listeners for view buttons
    addProductEventListeners(container);
};

// Function to add event listeners to product buttons
const addProductEventListeners = (container) => {
    container.querySelectorAll('.view-product').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = e.target.closest('.view-product').dataset.productId;
            const product = getProductById(productId);

            if (product) {
                console.log('View product:', product);
                handleProductView(product);
            } else {
                console.error('Product not found:', productId);
            }
        });
    });
};

// Function to handle product view
const handleProductView = (product) => {
    // Show product details
    console.log('Viewing product:', product.name);
    console.log('Specifications:', product.specs);

    // For now, show alert with product details
    const specsText = product.specs.map(spec => `${spec.label}: ${spec.value}`).join('\n');
    alert(`${product.name}\n\nSpecifications:\n${specsText}`);
};

// Get specific product by ID
const getProductById = (id) => {
    if (typeof PUMPS === 'undefined' || !Array.isArray(PUMPS)) {
        console.error('Products array not available');
        return null;
    }
    return PUMPS.find(product => product.id === id);
};

// Filter products by specification
const filterProductsBySpec = (specLabel, specValue) => {
    if (typeof PUMPS === 'undefined' || !Array.isArray(PUMPS)) {
        console.error('Products array not available');
        return [];
    }

    return PUMPS.filter(product =>
        product.specs.some(spec =>
            spec.label.toLowerCase() === specLabel.toLowerCase() &&
            spec.value.toLowerCase().includes(specValue.toLowerCase())
        )
    );
};

// Initialize products when script loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing products...');
    renderProducts('productSlider');
});

// If DOM already loaded
if (document.readyState !== 'loading') {
    console.log('DOM already ready, initializing products...');
    renderProducts('productSlider');
}