CREATE DATABASE IF NOT EXISTS food_delivery;
USE food_delivery;

-- ==========================================
-- 1. USERS
-- ==========================================
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 2. ADMINS
-- ==========================================
CREATE TABLE admins (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- ==========================================
-- 3. RESTAURANTS
-- ==========================================
CREATE TABLE restaurants (
    restaurant_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(15),
    rating DECIMAL(2,1) DEFAULT 0.0,
    status VARCHAR(20) DEFAULT 'OPEN'
);

-- ==========================================
-- 4. CATEGORIES
-- ==========================================
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- ==========================================
-- 5. FOOD ITEMS
-- ==========================================
CREATE TABLE food_items (
    food_id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT NOT NULL,
    category_id INT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255),
    available BOOLEAN DEFAULT TRUE,

    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(restaurant_id)
        ON DELETE CASCADE,

    FOREIGN KEY (category_id)
        REFERENCES categories(category_id)
        ON DELETE SET NULL
);

-- ==========================================
-- 6. ADDRESSES
-- ==========================================
CREATE TABLE addresses (
    address_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    address_line VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

-- ==========================================
-- 7. CART
-- ==========================================
CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    food_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    FOREIGN KEY (food_id)
        REFERENCES food_items(food_id)
        ON DELETE CASCADE
);

-- ==========================================
-- 8. ORDERS
-- ==========================================
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    address_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(30) DEFAULT 'PLACED',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id),

    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(restaurant_id),

    FOREIGN KEY (address_id)
        REFERENCES addresses(address_id)
);

-- ==========================================
-- 9. ORDER ITEMS
-- ==========================================
CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    food_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
        ON DELETE CASCADE,

    FOREIGN KEY (food_id)
        REFERENCES food_items(food_id)
);

-- ==========================================
-- 10. PAYMENTS
-- ==========================================
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(30) NOT NULL,
    payment_status VARCHAR(30) DEFAULT 'PENDING',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
        ON DELETE CASCADE
);

-- ==========================================
-- 11. DELIVERY PARTNERS
-- ==========================================
CREATE TABLE delivery_partners (
    partner_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    vehicle_number VARCHAR(30),
    status VARCHAR(30) DEFAULT 'AVAILABLE'
);

-- ==========================================
-- 12. DELIVERY
-- ==========================================
CREATE TABLE delivery (
    delivery_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    partner_id INT,
    status VARCHAR(30) DEFAULT 'ASSIGNED',
    delivery_time TIMESTAMP NULL,

    FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
        ON DELETE CASCADE,

    FOREIGN KEY (partner_id)
        REFERENCES delivery_partners(partner_id)
        ON DELETE SET NULL
);

-- ==========================================
-- 13. REVIEWS
-- ==========================================
CREATE TABLE reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    order_id INT,
    comment VARCHAR(500),
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(restaurant_id)
        ON DELETE CASCADE,

    FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
        ON DELETE SET NULL
);

-- ==========================================
-- 14. RATINGS
-- ==========================================
CREATE TABLE ratings (
    rating_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    rating INT NOT NULL,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(restaurant_id)
        ON DELETE CASCADE,

    CHECK (rating >= 1 AND rating <= 5)
);

-- ==========================================
-- 15. COUPONS
-- ==========================================
CREATE TABLE coupons (
    coupon_id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    discount DECIMAL(5,2) NOT NULL,
    min_order_amount DECIMAL(10,2) DEFAULT 0,
    expiry_date DATE,
    active BOOLEAN DEFAULT TRUE
);

-- ==========================================
-- 16. NOTIFICATIONS
-- ==========================================
CREATE TABLE notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    message VARCHAR(255) NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

-- ==========================================
-- SAMPLE DATA
-- ==========================================

-- Users
INSERT INTO users (name, email, password, phone)
VALUES
('Priya', 'priya@gmail.com', '1234', '9876543210'),
('Riya', 'riya@gmail.com', '1234', '9876543211');

-- Admin
INSERT INTO admins (name, email, password)
VALUES
('Admin', 'admin@gmail.com', 'admin123');

-- Restaurants
INSERT INTO restaurants (name, address, phone, rating, status)
VALUES
('Food Palace', 'Trichy Main Road', '9876500001', 4.5, 'OPEN'),
('Spice Restaurant', 'Trichy Bus Stand', '9876500002', 4.2, 'OPEN'),
('Tasty Corner', 'Woraiyur, Trichy', '9876500003', 4.0, 'OPEN');

-- Categories
INSERT INTO categories (name)
VALUES
('Pizza'),
('Burger'),
('Biryani'),
('South Indian');

-- Food Items
INSERT INTO food_items
(restaurant_id, category_id, name, description, price, image, available)
VALUES
(1, 1, 'Cheese Pizza', 'Delicious cheese pizza', 199.00, 'pizza.jpg', TRUE),
(1, 2, 'Chicken Burger', 'Crispy chicken burger', 149.00, 'burger.jpg', TRUE),
(2, 3, 'Chicken Biryani', 'Spicy chicken biryani', 220.00, 'biryani.jpg', TRUE),
(3, 4, 'Masala Dosa', 'Crispy masala dosa', 80.00, 'dosa.jpg', TRUE);

-- Delivery Partners
INSERT INTO delivery_partners
(name, phone, vehicle_number, status)
VALUES
('Arun', '9876511111', 'TN45AB1234', 'AVAILABLE'),
('Kumar', '9876522222', 'TN45CD5678', 'AVAILABLE');

-- Coupons
INSERT INTO coupons
(code, discount, min_order_amount, expiry_date, active)
VALUES
('WELCOME10', 10.00, 200.00, '2027-12-31', TRUE),
('FOOD20', 20.00, 500.00, '2027-12-31', TRUE);

-- ==========================================
-- CHECK TABLES
-- ==========================================

SHOW TABLES;

-- Check restaurants
SELECT * FROM restaurants;

-- Check food items
SELECT * FROM food_items;

-- Check users
SELECT * FROM users;