# BazaarHub - E-Commerce Platform

A full-featured e-commerce platform for reselling Meesho products with multiple payment options.

## Features

✨ **Core Features:**
- 📦 Complete product catalog with search & filter
- 🛒 Shopping cart management
- 👤 User authentication (Sign up/Login)
- 💳 Multiple payment options:
  - Cash on Delivery (COD) - Primary
  - UPI/Online Payment - Display option
- 📋 Order management system
- 🏪 Admin dashboard
- 📱 Responsive design

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Database:** JSON (can be upgraded to MongoDB/PostgreSQL)
- **Hosting:** GitHub Pages (Frontend)

## Project Structure

```
bazaarhub/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── cart.js
│   ├── auth.js
│   └── products.js
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── orders.js
│   │   └── auth.js
│   └── data/
│       └── products.json
├── pages/
│   ├── cart.html
│   ├── checkout.html
│   ├── login.html
│   ├── signup.html
│   └── order-confirmation.html
└── assets/
    └── images/
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `node backend/server.js`
4. Open `index.html` in your browser

## Payment Methods

- **COD:** Works fully - customers pay at delivery
- **UPI:** UI integration for future implementation

## Live Demo

Visit: https://ROYALBUILDS.github.io/bazaarhub/

---

**Created with ❤️ for Meesho Reselling**
