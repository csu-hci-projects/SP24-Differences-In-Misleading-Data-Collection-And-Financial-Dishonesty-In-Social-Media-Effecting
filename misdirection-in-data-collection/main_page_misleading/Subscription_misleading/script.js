function subscribeNow() {
    document.getElementById("verification-popup").classList.remove('hidden');
}

function verifyIdentity() {
    var email = document.getElementById("email").value;
    var ssn = document.getElementById("ssn").value;
    if (email && ssn.length === 4) {
        var newPrice = "$4.99/month";  
        document.getElementById("new-subscription-price").innerText = newPrice;
        document.getElementById("subscription-price").innerText = newPrice;
        document.getElementById("subscription-header").style.color = "#32CD32";
        document.getElementById("verification-popup").classList.add('hidden');
        document.getElementById("confirmation-popup").classList.remove('hidden');
    } else {
        alert("Please enter valid email and last 4 digits of SSN.");
    }
}

function closePopup() {
    document.getElementById("confirmation-popup").classList.add('hidden');
}
