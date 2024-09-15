document.getElementById('button').addEventListener('click', function() {
    // Get the input URL value
    const url = document.getElementById('input').value;

    // Validate the URL
    if (!url || !url.startsWith('http')) {
        alert('Please enter a valid URL starting with http or https.');
        return;
    }

    // Store the URL in localStorage
    localStorage.setItem('qrUrl', url);

    // Redirect to qrDisplay.html to show the QR code
    window.location.href = 'qrDisplay.html';
});
