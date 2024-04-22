let cart = [];
let discountApplied = false;

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total');
    const grandTotalElement = document.getElementById('grand-total');
    const convenienceFee = parseFloat(document.getElementById('convenience-fee').textContent);
    cartList.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);

        totalPrice += parseFloat(item.price);
    });

    const finalPrice = discountApplied ? totalPrice * 0.9 : totalPrice;
    totalPriceElement.textContent = finalPrice.toFixed(2);
    grandTotalElement.textContent = (finalPrice + convenienceFee).toFixed(2);
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function checkout() {
    if (cart.length > 0) {
        alert('Checking out ' + JSON.stringify(cart));
        cart = [];
        discountApplied = false;  // Reset discount
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
}

document.getElementById('apply-discount').addEventListener('click', function () {
    discountApplied = true;
    updateCart();
    alert('Discount applied!');
});

// Subscription Button animation and cookie agreement
const subscribeButton = document.getElementById('subscribe-btn');
subscribeButton.addEventListener('click', function() {
    subscribeButton.classList.add('flashy');
    document.getElementById('cookie-banner').classList.remove('hidden');
});


document.getElementById('cookie-agree-btn').addEventListener('click', function() {
    alert('Thank you for accepting cookies.');
    document.getElementById('cookie-banner').classList.add('hidden');
});

document.getElementById('cookie-decline-btn').addEventListener('click', function() {
    alert('Cookies are not accepted.');
    document.getElementById('cookie-banner').classList.add('hidden');
});
