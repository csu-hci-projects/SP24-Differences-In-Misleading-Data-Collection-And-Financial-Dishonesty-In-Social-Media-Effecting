let cart = [];

function updateCart() {
    const cartList = document.getElementById('cartList');
    const totalPriceElement = document.getElementById('totalPrice');
    cartList.innerHTML = ''; 

    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);

        totalPrice += parseFloat(item.price);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

document.querySelectorAll('#products .product button').forEach(button => {
    button.addEventListener('click', e => {
        const product = e.target.parentElement;
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        cart.push({name, price});

        updateCart(); 
    });
});

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Checking out ' + JSON.stringify(cart));
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
});
