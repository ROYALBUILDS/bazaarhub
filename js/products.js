// Sample Products Data
const productsData = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 1299,
        originalPrice: 2499,
        image: "🎧",
        description: "High-quality sound with noise cancellation",
        rating: 4.5
    },
    {
        id: 2,
        name: "Cotton T-Shirt",
        category: "fashion",
        price: 399,
        originalPrice: 799,
        image: "👕",
        description: "Comfortable and breathable cotton shirt",
        rating: 4.2
    },
    {
        id: 3,
        name: "Stainless Steel Kitchen Knife Set",
        category: "home",
        price: 899,
        originalPrice: 1599,
        image: "🔪",
        description: "Professional grade kitchen knives",
        rating: 4.7
    },
    {
        id: 4,
        name: "Face Moisturizer Cream",
        category: "beauty",
        price: 299,
        originalPrice: 599,
        image: "💆",
        description: "Hydrating formula for all skin types",
        rating: 4.3
    },
    {
        id: 5,
        name: "Yoga Mat",
        category: "sports",
        price: 599,
        originalPrice: 1199,
        image: "🧘",
        description: "Non-slip yoga mat for fitness",
        rating: 4.6
    },
    {
        id: 6,
        name: "Smart Watch",
        category: "electronics",
        price: 2499,
        originalPrice: 4999,
        image: "⌚",
        description: "Fitness tracking and notifications",
        rating: 4.4
    },
    {
        id: 7,
        name: "Running Shoes",
        category: "sports",
        price: 1999,
        originalPrice: 3999,
        image: "👟",
        description: "Comfortable running shoes with arch support",
        rating: 4.5
    },
    {
        id: 8,
        name: "Winter Jacket",
        category: "fashion",
        price: 1899,
        originalPrice: 3499,
        image: "🧥",
        description: "Warm and stylish winter jacket",
        rating: 4.6
    },
    {
        id: 9,
        name: "Coffee Maker",
        category: "home",
        price: 1799,
        originalPrice: 3299,
        image: "☕",
        description: "Automatic coffee maker with timer",
        rating: 4.4
    },
    {
        id: 10,
        name: "Lipstick Set",
        category: "beauty",
        price: 699,
        originalPrice: 1299,
        image: "💄",
        description: "Long-lasting matte lipstick collection",
        rating: 4.5
    },
    {
        id: 11,
        name: "USB-C Charging Cable",
        category: "electronics",
        price: 199,
        originalPrice: 399,
        image: "🔌",
        description: "Fast charging USB-C cable",
        rating: 4.3
    },
    {
        id: 12,
        name: "Bed Pillow Set",
        category: "home",
        price: 1299,
        originalPrice: 2499,
        image: "🛏️",
        description: "Memory foam pillow set for comfort",
        rating: 4.7
    }
];

// Display all products
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">No products found. Try different search terms.</div>';
        return;
    }
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    ${'⭐'.repeat(Math.floor(product.rating))} ${product.rating}
                </div>
                <div class="product-price">
                    <div>
                        <span class="price">₹${product.price}</span>
                        <span class="original-price">₹${product.originalPrice}</span>
                    </div>
                    <span class="discount">${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart({id: ${product.id}, name: '${product.name}', price: ${product.price}, image: '${product.image}'})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(productsData);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { productsData, displayProducts };
}
