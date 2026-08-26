# 🍔 Food Delivery Platform

## 📌 Project Overview

The **Food Delivery Platform** is a web-based application that allows users to
browse restaurants, view food items, add food to a cart, place orders, make
payments, track deliveries, and provide reviews and ratings.

The system also provides an admin module to manage users, restaurants,
food items, orders, payments, delivery partners, coupons, and notifications.

---

## 🎯 Objectives

- Provide a simple and user-friendly food ordering platform.
- Allow users to register and login.
- Allow users to browse restaurants and food items.
- Provide food search and category-based browsing.
- Allow users to add and remove food items from the cart.
- Provide checkout and payment functionality.
- Allow users to view their order history.
- Provide order tracking and delivery status.
- Allow users to give reviews and ratings.
- Provide coupon functionality.
- Provide an admin management system.

---

## ✨ Features

### 👤 User Features

- User Registration
- User Login
- User Profile
- Address Management
- Restaurant Browsing
- Food Menu
- Food Search
- Category Search
- Add to Cart
- Update Cart
- Remove from Cart
- Checkout
- Payment
- Order History
- Order Tracking
- Reviews
- Ratings
- Coupons
- Notifications

### 👨‍💼 Admin Features

- Admin Login
- Manage Users
- Manage Restaurants
- Manage Food Items
- Manage Categories
- Manage Orders
- Manage Payments
- Manage Delivery Partners
- Manage Coupons
- View Reviews and Ratings

### 🚴 Delivery Features

- Delivery Partner Management
- Order Assignment
- Delivery Status Updates
- Order Tracking
- Delivery Completion

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Web page structure |
| CSS3 | Website styling |
| JavaScript | Frontend functionality |
| Java | Backend development |
| MySQL | Database management |
| JDBC | Java-MySQL connectivity |
| VS Code | Development environment |
| Git/GitHub | Version control |

---

# 📁 Project Structure

```text
Food_Delivery/
│
├── backend/
│   ├── src/
│   │   ├── Main.java
│   │   ├── DatabaseConnection.java
│   │
│   │   ├── User.java
│   │   ├── Admin.java
│   │   ├── Restaurant.java
│   │   ├── FoodItem.java
│   │   ├── Category.java
│   │
│   │   ├── Cart.java
│   │   ├── Order.java
│   │   ├── OrderItem.java
│   │   ├── Payment.java
│   │
│   │   ├── Delivery.java
│   │   ├── DeliveryPartner.java
│   │   ├── Address.java
│   │
│   │   ├── Review.java
│   │   ├── Rating.java
│   │   ├── Coupon.java
│   │   ├── Notification.java
│   │   └── Search.java
│   │
│   └── food_delivery.sql
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── restaurants.html
│   ├── food-menu.html
│   ├── cart.html
│   ├── checkout.html
│   ├── payment.html
│   ├── order-history.html
│   ├── order-tracking.html
│   ├── profile.html
│   ├── reviews.html
│   └── admin.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── logo.png
│   ├── pizza.jpg
│   ├── burger.jpg
│   ├── biryani.jpg
│   └── dosa.jpg
│
└── README.md