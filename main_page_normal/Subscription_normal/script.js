function subscribeNow() {
    var newPrice = "$4.99/month"; 
    document.getElementById("new-subscription-price").innerText = newPrice;

    document.getElementById("confirmation-popup").classList.remove('hidden');
    
    document.getElementById("subscription-price").innerText = newPrice;
    document.getElementById("subscription-header").style.color = "#32CD32"; 
}

function closePopup() {
    document.getElementById("confirmation-popup").classList.add('hidden');
}


function closePopup() {
    document.getElementById("confirmation-popup").style.display = 'none';
}
