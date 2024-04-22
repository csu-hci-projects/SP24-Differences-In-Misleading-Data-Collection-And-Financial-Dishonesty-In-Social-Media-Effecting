document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    document.getElementById('newsletterPrompt').classList.remove('hidden');
});

document.getElementById('subscribeBtn').addEventListener('click', function() {
    alert('Thank you for subscribing!');
    
    document.getElementById('newsletterPrompt').classList.add('hidden');
});

document.getElementById('skipBtn').addEventListener('click', function() {
    alert('Profile updated successfully!');
    
    document.getElementById('newsletterPrompt').classList.add('hidden');
});
