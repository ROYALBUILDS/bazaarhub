// Sample Products Data
const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 1299,
        originalPrice: 1999,
        description: 'High-quality wireless headphones with noise cancellation',
        rating: '★★★★★ (245 reviews)',
        image: '🎧',
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Smart Watch',
        price: 2499,
        originalPrice: 4999,
        description: 'Feature-rich smartwatch with health tracking',
        rating: '★★★★☆ (189 reviews)',
        image: '⌚',
        category: 'Electronics'
    },
    {
        id: 3,
        name: 'Premium T-Shirt',
        price: 399,
        originalPrice: 899,
        description: 'Comfortable cotton t-shirt in multiple colors',
        rating: '★★★★★ (356 reviews)',
        image: '👕',
        category: 'Clothing'
    },
    {
        id: 4,
        name: 'Casual Sneakers',
        price: 1999,
        originalPrice: 3499,
        description: 'Stylish and comfortable sneakers for everyday wear',
        rating: '★★★★☆ (421 reviews)',
        image: '👟',
        category: 'Footwear'
    },
    {
        id: 5,
        name: 'Skincare Set',
        price: 599,
        originalPrice: 1299,
        description: 'Complete skincare routine set with natural ingredients',
        rating: '★★★★★ (512 reviews)',
        image: '💅',
        category: 'Beauty'
    },
    {
        id: 6,
        name: 'Home Decor Lamp',
        price: 799,
        originalPrice: 1599,
        description: 'Modern LED lamp perfect for any room',
        rating: '★★★★☆ (134 reviews)',
        image: '🏮',
        category: 'Home'
    },
    {
        id: 7,
        name: 'Portable Power Bank',
        price: 1199,
        originalPrice: 1999,
        description: '20000mAh fast charging power bank',
        rating: '★★★★★ (678 reviews)',
        image: '🔋',
        category: 'Accessories'
    },
    {
        id: 8,
        name: 'Yoga Mat',
        price: 499,
        originalPrice: 999,
        description: 'Non-slip yoga and exercise mat',
        rating: '★★★★☆ (267 reviews)',
        image: '🧘',
        category: 'Fitness'
    }
];

// Display Products
function displayProducts(productsToDisplay = products) {
    const grid = document.getElementById('productsGrid');
    
    if (productsToDisplay.length === 0) {
        grid.innerHTML = '<div class="no-products">❌ No products found</div>';
        return;
    }
    
    grid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-rating">${product.rating}</div>
                <div class="product-price">
                    <div>
                        <div class="price">₹${product.price}</div>
                        <div class="original-price">₹${product.originalPrice}</div>
                    </div>
                    <div class="discount">${Math.round((1 - product.price/product.originalPrice)*100)}% OFF</div>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Search Products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
}

// Filter Products by Category
function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});
