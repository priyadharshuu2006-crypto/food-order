CREATE DATABASE food_delivery;

USE food_delivery;

-- =========================
-- USER TABLE
-- =========================
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL
);

-- =========================
-- RESTAURANT TABLE
-- =========================
CREATE TABLE restaurants (
    restaurant_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL
);

-- =========================
-- FOOD ITEM TABLE
-- =========================
CREATE TABLE food_items (
    food_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    food_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (restaurant_id)
    REFERENCES restaurants(restaurant_id)
);

-- =========================
-- CART TABLE
-- =========================
CREATE TABLE cart (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    food_id INT,
    quantity INT DEFAULT 1,

    FOREIGN KEY (user_id)
    REFERENCES users(user_id),

    FOREIGN KEY (food_id)
    REFERENCES food_items(food_id)
);

-- =========================
-- ORDERS TABLE
-- =========================
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    restaurant_id INT,
    total_amount DECIMAL(10,2),
    order_status VARCHAR(50) DEFAULT 'Order Confirmed',

    FOREIGN KEY (user_id)
    REFERENCES users(user_id),

    FOREIGN KEY (restaurant_id)
    REFERENCES restaurants(restaurant_id)
);

-- =========================
-- PAYMENT TABLE
-- =========================
CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    amount DECIMAL(10,2),
    payment_method VARCHAR(50),
    payment_status VARCHAR(50),

    FOREIGN KEY (order_id)
    REFERENCES orders(order_id)
);

-- =========================
-- DELIVERY TABLE
-- =========================
CREATE TABLE deliveries (
    delivery_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    delivery_status VARCHAR(50),

    FOREIGN KEY (order_id)
    REFERENCES orders(order_id)
);

-- =========================
-- INSERT USERS
-- =========================
INSERT INTO users (name, email, password, phone)
VALUES
('Priya', 'priya@gmail.com', 'Priya@123', '9876543210');

-- =========================
-- INSERT RESTAURANTS
-- =========================
INSERT INTO restaurants (restaurant_name, location)
VALUES
('Food Palace', 'Trichy'),
('Spice Kitchen', 'Trichy'),
('Tasty Corner', 'Trichy');

-- =========================
-- INSERT FOOD ITEMS
-- =========================
INSERT INTO food_items (restaurant_id, food_name, price)
VALUES
(1, 'Chicken Biryani', 180.00),
(1, 'Pizza', 250.00),
(2, 'Burger', 120.00),
(3, 'Dosa', 80.00);

-- =========================
-- VIEW DATA
-- =========================
SELECT * FROM users;

SELECT * FROM restaurants;

SELECT * FROM food_items;

SELECT * FROM cart;

SELECT * FROM orders;

SELECT * FROM payments;

SELECT * FROM deliveries;