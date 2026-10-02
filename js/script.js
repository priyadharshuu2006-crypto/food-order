/* =====================================================
   FOOD ORDER AND DELIVERY PLATFORM
   MAIN JAVASCRIPT
   ===================================================== */


/* =====================================================
   REGISTER
   ===================================================== */

function registerUser(event) {

    event.preventDefault();

    const name =
        document.getElementById("registerName")?.value.trim();

    const email =
        document.getElementById("registerEmail")?.value.trim();

    const phone =
        document.getElementById("registerPhone")?.value.trim();

    const password =
        document.getElementById("registerPassword")?.value;

    if (!name || !email || !phone || !password) {
        alert("Please fill all fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (password.length < 4) {
        alert("Password must contain at least 4 characters.");
        return;
    }

    const user = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem(
        "registeredUser",
        JSON.stringify(user)
    );

    alert("Registration successful!");

    window.location.href = "login.html";
}


/* =====================================================
   LOGIN
   ===================================================== */

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail")?.value.trim();

    const password =
        document.getElementById("loginPassword")?.value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    const savedUser =
        JSON.parse(localStorage.getItem("registeredUser"));

    if (!savedUser) {
        alert("Please register an account first.");
        return;
    }

    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(savedUser)
        );

        alert("Login successful!");

        window.location.href = "index.html";

    } else {

        alert("Invalid email or password.");

    }
}


/* =====================================================
   SCHEDULED ORDER
   ===================================================== */

function scheduleOrder(event) {

    event.preventDefault();

    const orderId =
        document.getElementById("scheduleOrderId")?.value.trim();

    const date =
        document.getElementById("scheduleDate")?.value;

    const time =
        document.getElementById("scheduleTime")?.value;

    if (!orderId || !date || !time) {

        alert("Please fill all fields.");
        return;
    }

    const selectedDateTime =
        new Date(date + "T" + time);

    const currentDateTime =
        new Date();

    if (selectedDateTime <= currentDateTime) {

        alert("Please select a future date and time.");
        return;
    }

    const scheduledOrder = {

        orderId: orderId,
        date: date,
        time: time,
        status: "Scheduled"

    };

    localStorage.setItem(
        "scheduledOrder",
        JSON.stringify(scheduledOrder)
    );

    alert(
        "Order scheduled successfully!\n\n" +
        "Order ID: " + orderId + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time
    );

    const form =
        document.getElementById("scheduleForm");

    if (form) {
        form.reset();
    }

    showScheduledOrder();
}


/* =====================================================
   SHOW SCHEDULED ORDER
   ===================================================== */

function showScheduledOrder() {

    const order =
        JSON.parse(
            localStorage.getItem("scheduledOrder")
        );

    const container =
        document.getElementById("scheduledOrderDetails");

    if (!container) {
        return;
    }

    if (!order) {

        container.innerHTML =
            "<p>No scheduled order found.</p>";

        return;
    }

    container.innerHTML = `
        <div class="scheduled-card">

            <h3>📅 Scheduled Order</h3>

            <p>
                <strong>Order ID:</strong>
                ${order.orderId}
            </p>

            <p>
                <strong>Date:</strong>
                ${order.date}
            </p>

            <p>
                <strong>Time:</strong>
                ${order.time}
            </p>

            <p>
                <strong>Status:</strong>
                ${order.status}
            </p>

        </div>
    `;
}


/* =====================================================
   CANCEL SCHEDULED ORDER
   ===================================================== */

function cancelScheduledOrder() {

    localStorage.removeItem("scheduledOrder");

    alert("Scheduled order cancelled.");

    showScheduledOrder();
}


/* =====================================================
   NUTRITION INFORMATION
   ===================================================== */

function showNutrition(
    foodName,
    calories,
    protein,
    carbs,
    fat
) {

    const nutritionBox =
        document.getElementById("nutritionDetails");

    if (nutritionBox) {

        nutritionBox.innerHTML = `

            <div class="nutrition-card">

                <h2>🥗 ${foodName}</h2>

                <div class="nutrition-row">
                    <span>🔥 Calories</span>
                    <strong>${calories} kcal</strong>
                </div>

                <div class="nutrition-row">
                    <span>💪 Protein</span>
                    <strong>${protein} g</strong>
                </div>

                <div class="nutrition-row">
                    <span>🍞 Carbohydrates</span>
                    <strong>${carbs} g</strong>
                </div>

                <div class="nutrition-row">
                    <span>🥑 Fat</span>
                    <strong>${fat} g</strong>
                </div>

            </div>
        `;

    } else {

        alert(
            foodName + "\n\n" +
            "Calories: " + calories + " kcal\n" +
            "Protein: " + protein + " g\n" +
            "Carbohydrates: " + carbs + " g\n" +
            "Fat: " + fat + " g"
        );
    }
}


/* =====================================================
   CART - ADD FOOD
   ===================================================== */

function addToCart(name, price) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem =
        cart.find(function(item) {

            return item.name === name;

        });

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            name: name,
            price: Number(price),
            quantity: 1

        });
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");

    /*
       Automatically open cart.html
    */
    window.location.href = "cart.html";
}


/* =====================================================
   DISPLAY CART
   ===================================================== */

function displayCart() {

    const cartContainer =
        document.getElementById("cartItems");

    const totalElement =
        document.getElementById("cartTotal");

    if (!cartContainer) {
        return;
    }

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartContainer.innerHTML =
            "<p>Your cart is empty.</p>";

        if (totalElement) {
            totalElement.textContent = "0";
        }

        return;
    }

    cart.forEach(function(item, index) {

        const quantity =
            Number(item.quantity) || 1;

        const price =
            Number(item.price) || 0;

        const subtotal =
            price * quantity;

        total += subtotal;

        const div =
            document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <h3>${item.name}</h3>

            <p>Price: ₹${price}</p>

            <p>Quantity: ${quantity}</p>

            <p>Subtotal: ₹${subtotal}</p>

            <button onclick="removeFromCart(${index})">
                Remove
            </button>

        `;

        cartContainer.appendChild(div);

    });

    /*
       cart.html already has ₹ before cartTotal.
       Therefore only put the number here.
    */

    if (totalElement) {

        totalElement.textContent = total;

    }
}


/* =====================================================
   REMOVE FROM CART
   ===================================================== */

function removeFromCart(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}


/* =====================================================
   CLEAR CART
   ===================================================== */

function clearCart() {

    localStorage.removeItem("cart");

    displayCart();

    alert("Cart cleared.");
}


/* =====================================================
   GET CART TOTAL
   ===================================================== */

function getCartTotal() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(function(item) {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 1;

        total += price * quantity;

    });

    return total;
}


/* =====================================================
   SHOW PAYMENT TOTAL
   ===================================================== */

function showPaymentTotal() {

    const total =
        getCartTotal();

    const paymentTotal =
        document.getElementById("paymentTotal");

    if (paymentTotal) {

        paymentTotal.textContent = total;

    }
}


/* =====================================================
   PAYMENT
   ===================================================== */

function makePayment(event) {

    event.preventDefault();

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty.");
        return;

    }

    const paymentMethodElement =
        document.querySelector(
            'input[name="payment"]:checked'
        );

    if (!paymentMethodElement) {

        alert("Please select a payment method.");
        return;

    }

    const paymentMethod =
        paymentMethodElement.value;

    const total =
        getCartTotal();

    /*
       Create an Order ID
    */

    const orderId =
        Math.floor(
            1000 + Math.random() * 9000
        );

    /*
       Save order information
    */

    localStorage.setItem(
        "lastOrderId",
        orderId
    );

    localStorage.setItem(
        "lastOrderTotal",
        total
    );

    localStorage.setItem(
        "lastPaymentMethod",
        paymentMethod
    );

    alert(
        "Payment successful!\n\n" +
        "Order ID: " + orderId + "\n" +
        "Payment Method: " + paymentMethod + "\n" +
        "Total Amount: ₹" + total
    );

    /*
       Clear cart after payment
    */

    localStorage.removeItem("cart");

    /*
       Go to order tracking
    */

    window.location.href =
        "order-tracking.html";
}
/* =====================================================
   ORDER HISTORY
   ===================================================== */

function showOrderHistory() {

    const container =
        document.getElementById("orderHistory");

    if (!container) {
        return;
    }

    const orderId =
        localStorage.getItem("lastOrderId");

    const total =
        localStorage.getItem("lastOrderTotal");

    const paymentMethod =
        localStorage.getItem("lastPaymentMethod");


    if (!orderId) {

        container.innerHTML = `
            <div class="cart-item">
                <h3>No orders found</h3>
                <p>You have not placed any orders yet.</p>
            </div>
        `;

        return;
    }


    container.innerHTML = `

        <div class="cart-item">

            <h3>🍔 Order #${orderId}</h3>

            <p>
                <strong>Total Amount:</strong>
                ₹${total}
            </p>

            <p>
                <strong>Payment Method:</strong>
                ${paymentMethod}
            </p>

            <p>
                <strong>Status:</strong>
                <span>✅ Order Placed</span>
            </p>

        </div>

    `;
}


/* =====================================================
   PLACE ORDER
   ===================================================== */

function placeOrder() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty.");
        return;
    }

    const total =
        getCartTotal();

    const orderId =
        Math.floor(
            1000 + Math.random() * 9000
        );

    localStorage.setItem(
        "lastOrderId",
        orderId
    );

    localStorage.setItem(
        "lastOrderTotal",
        total
    );

    alert(
        "Order placed successfully!\n\n" +
        "Order ID: " + orderId + "\n" +
        "Total Amount: ₹" + total
    );

    localStorage.removeItem("cart");

    displayCart();
}


/* =====================================================
   REVIEW
   ===================================================== */

function submitReview(event) {

    event.preventDefault();

    alert(
        "Thank you! Your review has been submitted."
    );

    event.target.reset();
}


/* =====================================================
   SEARCH FOOD
   ===================================================== */

function searchFood() {

    /*
       Your food-menu.html uses:
       id="searchFood"

       Some other pages may use:
       id="searchInput"

       So support both.
    */

    const searchInput =
        document.getElementById("searchFood") ||
        document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const searchText =
        searchInput.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(
            ".food-card, .restaurant-card"
        );

    cards.forEach(function(card) {

        const text =
            card.textContent.toLowerCase();

        if (text.includes(searchText)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }
    });
}


/* =====================================================
   LOGOUT
   ===================================================== */

function logout() {

    localStorage.removeItem(
        "loggedInUser"
    );

    alert("You have been logged out.");

    window.location.href =
        "login.html";
}


/* =====================================================
   PAGE LOAD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Food Delivery Platform Loaded"
        );


        /* ================================
           CART
           ================================ */

        displayCart();


        /* ================================
           PAYMENT TOTAL
           ================================ */

        showPaymentTotal();


        /* ================================
           SCHEDULED ORDER
           ================================ */

        showScheduledOrder();


        /* ================================
           SEARCH
           ================================ */

        const searchInput =
            document.getElementById("searchFood") ||
            document.getElementById("searchInput");

        if (searchInput) {

            searchInput.addEventListener(
                "input",
                searchFood
            );

        }

    }
);