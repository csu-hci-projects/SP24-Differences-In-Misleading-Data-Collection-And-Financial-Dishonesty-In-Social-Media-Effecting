let cart = [];

function addToCart(itemName, price) {
    cart.push({name: itemName, price: price});
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');  
    const totalPriceElement = document.getElementById('total');  
    cartList.innerHTML = ''; 

    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);

        totalPrice += item.price;
    });

    document.getElementById('grand-total').textContent = (totalPrice + 3).toFixed(2); 
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function checkout() {
    if (cart.length > 0) {
        alert('Checking out ' + JSON.stringify(cart));
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
}
