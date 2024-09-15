document.getElementById('button').addEventListener('click', function() {
    
    const url = document.getElementById('input').value;

    
    if (!url || !url.startsWith('http')) {
        alert('Please enter a valid URL starting with http or https.');
        return;
    }

    
    localStorage.setItem('qrUrl', url);


    window.location.href = 'qrDisplay.html';
});
