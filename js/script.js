/* =========================================
   FOOD ORDER AND DELIVERY PLATFORM
   MAIN JAVASCRIPT FILE
   ========================================= */

// =========================================
// 1. LOGIN
// =========================================

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }

    localStorage.setItem("loggedInUser", email);

    alert("Login successful!");
    window.location.href = "restaurants.html";
}


// =========================================
// 2. REGISTER
// =========================================

function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    alert("Registration successful!");
    window.location.href = "login.html";
}


// =========================================
// 3. CART
// =========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(foodName, price) {

    const item = {
        name: foodName,
        price: price
    };

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(foodName + " added to cart!");
}


function displayCart() {

    const cartItems = document.getElementById("cartItems");
    const totalAmount = document.getElementById("totalAmount");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        if (totalAmount) {
            totalAmount.innerText = "₹0";
        }

        return;
    }

    cart.forEach(function(item, index) {

        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });

    if (totalAmount) {
        totalAmount.innerText = "₹" + total;
    }
}


function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// =========================================
// 4. CHECKOUT
// =========================================

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    window.location.href = "checkout.html";
}


// =========================================
// 5. PAYMENT
// =========================================

function makePayment(event) {

    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const paymentMethod =
        document.getElementById("paymentMethod");

    if (!paymentMethod) {
        alert("Payment successful!");
    } else {
        alert(
            "Payment successful using " +
            paymentMethod.value
        );
    }

    localStorage.removeItem("cart");
    cart = [];

    window.location.href = "order-tracking.html";
}


// =========================================
// 6. ORDER TRACKING
// =========================================

function trackOrder() {

    const orderStatus =
        document.getElementById("orderStatus");

    if (!orderStatus) {
        return;
    }

    orderStatus.innerHTML = `
        <p>✅ Order Confirmed</p>
        <p>👨‍🍳 Food is being prepared</p>
        <p>🛵 Delivery partner assigned</p>
        <p>📦 Order is on the way</p>
        <p>🏠 Order delivered</p>
    `;
}


// =========================================
// 7. SCHEDULE ORDER
// =========================================

const scheduleForm =
    document.getElementById("scheduleForm");

if (scheduleForm) {

    scheduleForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const orderId =
            document.getElementById("orderId").value;

        const date =
            document.getElementById("scheduleDate").value;

        const time =
            document.getElementById("scheduleTime").value;

        const status =
            document.getElementById("status").value;

        if (orderId === "" || date === "" || time === "") {

            alert("Please fill all fields.");

            return;
        }

        const scheduleData = {
            orderId: orderId,
            date: date,
            time: time,
            status: status
        };

        localStorage.setItem(
            "scheduledOrder",
            JSON.stringify(scheduleData)
        );

        const message =
            document.getElementById("message");

        if (message) {

            message.innerText =
                "Order scheduled successfully!";

        } else {

            alert("Order scheduled successfully!");
        }
    });
}


// =========================================
// 8. NUTRITION INFORMATION
// =========================================

function showNutrition(foodName) {

    const nutritionData = {

        "Cheese Pizza": {
            calories: 285,
            protein: 12,
            carbohydrates: 36,
            fat: 10
        },

        "Chicken Burger": {
            calories: 350,
            protein: 20,
            carbohydrates: 40,
            fat: 15
        },

        "Chicken Biryani": {
            calories: 450,
            protein: 25,
            carbohydrates: 55,
            fat: 18
        },

        "Dosa": {
            calories: 168,
            protein: 4,
            carbohydrates: 29,
            fat: 4
        }
    };

    const food = nutritionData[foodName];

    if (!food) {
        alert("Nutrition information not available.");
        return;
    }

    alert(
        foodName + "\n\n" +
        "Calories: " + food.calories + " kcal\n" +
        "Protein: " + food.protein + " g\n" +
        "Carbohydrates: " + food.carbohydrates + " g\n" +
        "Fat: " + food.fat + " g"
    );
}


// =========================================
// 9. SEARCH FOOD
// =========================================

function searchFood() {

    const searchInput =
        document.getElementById("searchInput");

    const foodCards =
        document.querySelectorAll(".food-card");

    if (!searchInput) {
        return;
    }

    const searchText =
        searchInput.value.toLowerCase();

    foodCards.forEach(function(card) {

        const foodName =
            card.innerText.toLowerCase();

        if (foodName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// =========================================
// 10. LOGOUT
// =========================================

function logoutUser() {

    localStorage.removeItem("loggedInUser");

    alert("You have been logged out.");

    window.location.href = "login.html";
}


// =========================================
// 11. DISPLAY USER NAME
// =========================================

function displayUserName() {

    const userNameElement =
        document.getElementById("userName");

    const userName =
        localStorage.getItem("userName");

    if (userNameElement && userName) {

        userNameElement.innerText =
            userName;
    }
}


// =========================================
// 12. PAGE LOAD
// =========================================

document.addEventListener("DOMContentLoaded", function() {

    displayCart();

    displayUserName();

});