document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Show the newsletter subscription prompt
    document.getElementById('newsletterPrompt').classList.remove('hidden');
});

document.getElementById('subscribeBtn').addEventListener('click', function() {
    alert('Thank you for subscribing! Your new monthly price is $0.99!');
    
    document.getElementById('newsletterPrompt').classList.add('hidden');
});

document.getElementById('skipBtn').addEventListener('click', function() {
    alert('Profile updated successfully!');
    document.getElementById('newsletterPrompt').classList.add('hidden');
});
