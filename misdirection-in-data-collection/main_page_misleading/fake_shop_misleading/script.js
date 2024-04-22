let cart = [];
let discountApplied = false;

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

    if (discountApplied) {
        totalPrice *= 0.9; // Apply 10% discount
    }

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

function applyDiscount() {
    const phoneNumber = document.getElementById('phone-number').value;
    if (phoneNumber) {
        discountApplied = true;
        updateCart();
        alert('10% discount has been applied!');
    } else {
        alert('Please enter a phone number to apply the discount.');
    }
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Checking out ' + JSON.stringify(cart));
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
});
