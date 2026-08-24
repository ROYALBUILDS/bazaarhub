// Main JavaScript - Search, Filter & General Functionality

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    let filtered = productsData;
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filter by category
    if (category) {
        filtered = filtered.filter(product => product.category === category);
    }
    
    displayProducts(filtered);
}

// Real-time search as user types
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', searchProducts);
    }
    
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', searchProducts);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Price range formatter
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(price);
}

// Discount calculator
function calculateDiscount(original, current) {
    return Math.round(((original - current) / original) * 100);
}

// Load user data if logged in
function loadUserData() {
    const user = localStorage.getItem('bazaarhubUser');
    if (user) {
        const userData = JSON.parse(user);
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            // Could add user profile link here
            console.log('User logged in:', userData.email);
        }
    }
}

// Check if user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('bazaarhubUser') !== null;
}

// Logout function
function logoutUser() {
    localStorage.removeItem('bazaarhubUser');
    window.location.href = 'index.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    displayProducts(productsData);
});

// Add to favorites (future feature)
function addToFavorites(productId) {
    const favorites = JSON.parse(localStorage.getItem('bazaarhubFavorites') || '[]');
    if (!favorites.includes(productId)) {
        favorites.push(productId);
        localStorage.setItem('bazaarhubFavorites', JSON.stringify(favorites));
        showNotification('Added to favorites!');
    }
}

// Get favorites
function getFavorites() {
    return JSON.parse(localStorage.getItem('bazaarhubFavorites') || '[]');
}

// Remove from favorites
function removeFromFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem('bazaarhubFavorites') || '[]');
    favorites = favorites.filter(id => id !== productId);
    localStorage.setItem('bazaarhubFavorites', JSON.stringify(favorites));
}

// Sort products
function sortProducts(sortBy) {
    let sorted = [...productsData];
    
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            sorted = productsData;
    }
    
    displayProducts(sorted);
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchProducts,
        formatPrice,
        calculateDiscount,
        isUserLoggedIn,
        logoutUser,
        addToFavorites,
        getFavorites,
        removeFromFavorites,
        sortProducts
    };
}
