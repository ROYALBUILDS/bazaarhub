// Shopping Cart Management

// Get cart from localStorage or initialize empty
function getCart() {
    const cart = localStorage.getItem('bazaarhubCart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('bazaarhubCart', JSON.stringify(cart));
    updateCartCount();
}

// Add product to cart
function addToCart(product) {
    const cart = getCart();
    
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    
    saveCart(cart);
    showNotification(`${product.name} added to cart!`);
}

// Remove product from cart
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

// Update product quantity
function updateQuantity(productId, quantity) {
    const cart = getCart();
    const product = cart.find(item => item.id === productId);
    
    if (product) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            product.quantity = quantity;
            saveCart(cart);
        }
    }
}

// Get cart total
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = getCartCount();
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00A651;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);

// Add animation styles
if (!document.querySelector('style[data-cart-animations]')) {
    const style = document.createElement('style');
    style.setAttribute('data-cart-animations', 'true');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        getCart, 
        saveCart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        getCartTotal, 
        getCartCount 
    };
}
