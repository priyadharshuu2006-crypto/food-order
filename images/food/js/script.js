let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");
    let totalElement = document.getElementById("total");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        total += item.price;

        cartItems.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </p>
        `;
    });

    totalElement.innerText = "Total: ₹" + total;
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function openMenu() {
    window.location.href = "food-menu.html";
}

function login(event) {

    event.preventDefault();

    alert("Login successful!");

    window.location.href = "index.html";
}

function register(event) {

    event.preventDefault();

    alert("Registration successful!");

    window.location.href = "login.html";
}

function placeOrder() {

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    window.location.href = "order-tracking.html";
}

displayCart();