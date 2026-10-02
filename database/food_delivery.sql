-- Create Database
CREATE DATABASE IF NOT EXISTS food_delivery;

USE food_delivery;

-- 1. USER TABLE
CREATE TABLE IF NOT EXISTS users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(15) UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

-- 2. ADMIN TABLE
CREATE TABLE IF NOT EXISTS admins (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
    admin_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

-- 3. RESTAURANT TABLE
CREATE TABLE IF NOT EXISTS restaurants (
    restaurant_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_name VARCHAR(150) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(15)
);

-- 4. CATEGORY TABLE
CREATE TABLE IF NOT EXISTS categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(100) UNIQUE NOT NULL
);

-- 5. FOOD ITEM TABLE
CREATE TABLE IF NOT EXISTS food_items (
    food_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT NOT NULL,
    category_id INT,
    food_name VARCHAR(150) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(restaurant_id),
    FOREIGN KEY (category_id)
        REFERENCES categories(category_id)
);

-- 6. ADDRESS TABLE
CREATE TABLE IF NOT EXISTS addresses (
    address_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    address_line VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    postal_code VARCHAR(15),
    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);

-- 7. CART TABLE
CREATE TABLE IF NOT EXISTS carts (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNIQUE NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);

-- 8. CART ITEMS TABLE
CREATE TABLE IF NOT EXISTS cart_items (
    cart_item_id INT PRIMARY KEY AUTO_INCREMENT,
    cart_id INT NOT NULL,
    food_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    FOREIGN KEY (cart_id)
        REFERENCES carts(cart_id),
    FOREIGN KEY (food_id)
        REFERENCES food_items(food_id)
);

-- 9. ORDER TABLE
CREATE TABLE IF NOT EXISTS orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    address_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10,2) NOT NULL,
    order_status VARCHAR(30) DEFAULT 'Pending',
    FOREIGN KEY (user_id)
        REFERENCES users(user_id),
    FOREIGN KEY (address_id)
        REFERENCES addresses(address_id)
);

-- 10. ORDER ITEMS TABLE
CREATE TABLE IF NOT EXISTS order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    food_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id)
        REFERENCES orders(order_id),
    FOREIGN KEY (food_id)
        REFERENCES food_items(food_id)
);

-- 11. PAYMENT TABLE
CREATE TABLE IF NOT EXISTS payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT UNIQUE NOT NULL,
    payment_method VARCHAR(30) NOT NULL,
    payment_status VARCHAR(30) DEFAULT 'Pending',
    amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
);

-- 12. DELIVERY PARTNER TABLE
CREATE TABLE IF NOT EXISTS delivery_partners (
    delivery_partner_id INT PRIMARY KEY AUTO_INCREMENT,
    partner_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) UNIQUE
);

-- 13. DELIVERY TABLE
CREATE TABLE IF NOT EXISTS deliveries (
    delivery_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT UNIQUE NOT NULL,
    delivery_partner_id INT,
    delivery_status VARCHAR(30) DEFAULT 'Assigned',
    FOREIGN KEY (order_id)
        REFERENCES orders(order_id),
    FOREIGN KEY (delivery_partner_id)
        REFERENCES delivery_partners(delivery_partner_id)
);

-- 14. REVIEW TABLE
CREATE TABLE IF NOT EXISTS reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    comment TEXT,
    FOREIGN KEY (user_id)
        REFERENCES users(user_id),
    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(restaurant_id)
);

-- 15. RATING TABLE
CREATE TABLE IF NOT EXISTS ratings (
    rating_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    rating_value INT CHECK (rating_value BETWEEN 1 AND 5),
    FOREIGN KEY (user_id)
        REFERENCES users(user_id),
    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(restaurant_id)
);

-- 16. COUPON TABLE
CREATE TABLE IF NOT EXISTS coupons (
    coupon_id INT PRIMARY KEY AUTO_INCREMENT,
    coupon_code VARCHAR(40) UNIQUE NOT NULL,
    discount_percent DECIMAL(5,2) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    CHECK (discount_percent > 0 AND discount_percent <= 100)
);

-- 17. NOTIFICATION TABLE
CREATE TABLE IF NOT EXISTS notifications (
    notification_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    message VARCHAR(500) NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);

-- 18. NUTRITION TABLE
CREATE TABLE IF NOT EXISTS nutrition (
    nutrition_id INT PRIMARY KEY AUTO_INCREMENT,
    food_id INT UNIQUE NOT NULL,
    calories DECIMAL(8,2),
    protein_g DECIMAL(8,2),
    carbohydrates_g DECIMAL(8,2),
    fat_g DECIMAL(8,2),
    FOREIGN KEY (food_id)
        REFERENCES food_items(food_id)
);

-- 19. SCHEDULED ORDER TABLE
CREATE TABLE IF NOT EXISTS scheduled_orders (
    schedule_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT UNIQUE NOT NULL,
    scheduled_datetime DATETIME NOT NULL,
    schedule_status VARCHAR(30) DEFAULT 'Scheduled',
    FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
);

-- Insert sample categories
INSERT IGNORE INTO categories (category_name)
VALUES
('Indian Food'),
('Pizza'),
('Burgers'),
('Desserts'),
('Beverages');

-- Display all tables
SHOW TABLES;
