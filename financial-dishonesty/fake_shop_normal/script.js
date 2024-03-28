let cart = [];

document.querySelectorAll('#products .product button').forEach(button => {
    button.addEventListener('click', e => {
        const product = e.target.parentElement;
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        cart.push({name, price});
        console.log(cart);
    });
});

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Checking out ' + JSON.stringify(cart));
        cart = []; // Clear the cart after checkout
    } else {
        alert('Your cart is empty.');
    }
});
