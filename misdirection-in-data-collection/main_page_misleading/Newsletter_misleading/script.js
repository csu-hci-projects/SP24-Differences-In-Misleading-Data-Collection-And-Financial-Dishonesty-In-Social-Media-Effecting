document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Show the newsletter subscription prompt
    document.getElementById('newsletterPrompt').classList.remove('hidden');
});

document.getElementById('subscribeBtn').addEventListener('click', function() {
    alert('Thank you for subscribing!');
    // Here, you'd typically send a request to your server to update the subscription status
    // For this example, we'll just hide the prompt
    document.getElementById('newsletterPrompt').classList.add('hidden');
});

document.getElementById('skipBtn').addEventListener('click', function() {
    alert('Profile updated successfully!');
    // Hide the newsletter prompt and simulate profile update
    document.getElementById('newsletterPrompt').classList.add('hidden');
});
