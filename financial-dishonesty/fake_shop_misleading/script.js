let cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({itemName, price});
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const grandTotalElement = document.getElementById('grand-total');
    cartItemsElement.innerHTML = '';
    total = cart.reduce((sum, item) => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.itemName} - $${item.price}`;
        cartItemsElement.appendChild(itemElement);
        return sum + item.price;
    }, 0);
    totalElement.textContent = total.toFixed(2);
    const convenienceFee = 3;
    grandTotalElement.textContent = (total + convenienceFee).toFixed(2);
}

function checkout() {
    alert('Checkout complete. Thank you for your purchase!');
    cart = [];
    updateCart();
}
