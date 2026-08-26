// ======================================
// FOOD DELIVERY FRONTEND JAVASCRIPT
// ======================================


// --------------------------------------
// CART
// --------------------------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

    let item = {
        name: name,
        price: price
    };

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

    window.location.href = "cart.html";
}


function displayCart() {

    let cartItems = document.getElementById("cartItems");
    let cartTotal = document.getElementById("cartTotal");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        if (cartTotal) {
            cartTotal.innerText = "0";
        }

        return;
    }

    cart.forEach(function(item, index) {

        total = total + Number(item.price);

        let div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML =
            "<h3>" + item.name + "</h3>" +
            "<p>Price: ₹" + item.price + "</p>" +
            "<button onclick='removeFromCart(" + index + ")'>" +
            "Remove</button>";

        cartItems.appendChild(div);
    });

    if (cartTotal) {
        cartTotal.innerText = total;
    }
}


function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}


function getCartTotal() {

    let total = 0;

    cart.forEach(function(item) {
        total += Number(item.price);
    });

    return total;
}


// --------------------------------------
// REGISTER
// --------------------------------------

function registerUser(event) {

    event.preventDefault();

    let name =
        document.getElementById("registerName").value;

    let email =
        document.getElementById("registerEmail").value;

    let phone =
        document.getElementById("registerPhone").value;

    let password =
        document.getElementById("registerPassword").value;

    let user = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("Registration successful!");

    window.location.href = "login.html";
}


// --------------------------------------
// LOGIN
// --------------------------------------

function loginUser(event) {

    event.preventDefault();

    let email =
        document.getElementById("loginEmail").value;

    let password =
        document.getElementById("loginPassword").value;

    let user =
        JSON.parse(localStorage.getItem("user"));

    if (user === null) {

        alert("Please register first.");

        return;
    }

    if (
        email === user.email &&
        password === user.password
    ) {

        localStorage.setItem("loggedIn", "true");

        alert("Login successful!");

        window.location.href = "index.html";

    } else {

        alert("Invalid email or password.");
    }
}


// --------------------------------------
// LOGOUT
// --------------------------------------

function logout() {

    localStorage.removeItem("loggedIn");

    alert("You have been logged out.");

    window.location.href = "login.html";
}


// --------------------------------------
// PROFILE
// --------------------------------------

function loadProfile() {

    let user =
        JSON.parse(localStorage.getItem("user"));

    if (user === null) {
        return;
    }

    let name =
        document.getElementById("profileName");

    let email =
        document.getElementById("profileEmail");

    let phone =
        document.getElementById("profilePhone");

    if (name) {
        name.value = user.name;
    }

    if (email) {
        email.value = user.email;
    }

    if (phone) {
        phone.value = user.phone;
    }
}


function saveProfile(event) {

    event.preventDefault();

    let user = {
        name:
            document.getElementById("profileName").value,

        email:
            document.getElementById("profileEmail").value,

        phone:
            document.getElementById("profilePhone").value,

        password:
            JSON.parse(localStorage.getItem("user")).password
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("Profile updated successfully!");
}


// --------------------------------------
// CHECKOUT
// --------------------------------------

function checkout(event) {

    event.preventDefault();

    if (cart.length === 0) {

        alert("Your cart is empty.");

        window.location.href = "cart.html";

        return;
    }

    let address = {
        address:
            document.getElementById("address").value,

        city:
            document.getElementById("city").value,

        state:
            document.getElementById("state").value,

        pincode:
            document.getElementById("pincode").value
    };

    localStorage.setItem(
        "address",
        JSON.stringify(address)
    );

    window.location.href = "payment.html";
}


// --------------------------------------
// PAYMENT
// --------------------------------------

function showPaymentTotal() {

    let paymentTotal =
        document.getElementById("paymentTotal");

    if (paymentTotal) {

        paymentTotal.innerText =
            getCartTotal();
    }
}


function makePayment(event) {

    event.preventDefault();

    let selected =
        document.querySelector(
            'input[name="payment"]:checked'
        );

    if (!selected) {

        alert("Please select payment method.");

        return;
    }

    let order = {

        orderId:
            Math.floor(Math.random() * 9000) + 1000,

        items: cart,

        total: getCartTotal(),

        paymentMethod:
            selected.value,

        status: "Placed",

        date:
            new Date().toLocaleString()
    };

    let orders =
        JSON.parse(
            localStorage.getItem("orders")
        ) || [];

    orders.push(order);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    cart = [];

    alert("Order placed successfully!");

    window.location.href =
        "order-history.html";
}


// --------------------------------------
// ORDER HISTORY
// --------------------------------------

function displayOrders() {

    let orderHistory =
        document.getElementById("orderHistory");

    if (!orderHistory) {
        return;
    }

    let orders =
        JSON.parse(
            localStorage.getItem("orders")
        ) || [];

    orderHistory.innerHTML = "";

    if (orders.length === 0) {

        orderHistory.innerHTML =
            "<p>No orders found.</p>";

        return;
    }

    orders.forEach(function(order) {

        let div =
            document.createElement("div");

        div.className = "card";

        div.style.margin = "20px auto";

        div.innerHTML =
            "<h3>Order #" +
            order.orderId +
            "</h3>" +

            "<p>Total: ₹" +
            order.total +
            "</p>" +

            "<p>Payment: " +
            order.paymentMethod +
            "</p>" +

            "<p>Status: " +
            order.status +
            "</p>" +

            "<p>Date: " +
            order.date +
            "</p>" +

            "<a href='order-tracking.html'>" +
            "<button>Track Order</button>" +
            "</a>";

        orderHistory.appendChild(div);
    });
}


// --------------------------------------
// REVIEWS
// --------------------------------------

function submitReview(event) {

    event.preventDefault();

    let restaurant =
        document.getElementById(
            "restaurantName"
        ).value;

    let rating =
        document.getElementById(
            "rating"
        ).value;

    let comment =
        document.getElementById(
            "reviewComment"
        ).value;

    let review = {

        restaurant: restaurant,

        rating: rating,

        comment: comment,

        date: new Date().toLocaleString()
    };

    let reviews =
        JSON.parse(
            localStorage.getItem("reviews")
        ) || [];

    reviews.push(review);

    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );

    alert("Thank you for your review!");

    document.getElementById(
        "restaurantName"
    ).value = "";
1
    document.getElementById(
        "rating"
    ).value = "";

    document.getElementById(
        "reviewComment"
    ).value = "";
}


// --------------------------------------
// ADMIN
// --------------------------------------

function addRestaurant() {

    let name =
        prompt("Enter restaurant name:");

    if (name === null || name.trim() === "") {

        alert("Restaurant name is required.");

        return;
    }

    alert(
        name +
        " restaurant added successfully!"
    );
}