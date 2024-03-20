function subscribeNow() {
    // Simulate payment processing and receipt generation
    var receipt = "Receipt Number: " + Math.floor(Math.random() * 1000000) + 
                  "\nSubscription: $5.99/month" + 
                  "\nDate: " + new Date().toLocaleDateString();

    // Show confirmation with receipt
    document.getElementById("receipt-details").innerText = receipt;
    document.getElementById("confirmation-popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("confirmation-popup").classList.add("hidden");
}
