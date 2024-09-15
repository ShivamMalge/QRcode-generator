const url = localStorage.getItem('qrUrl');

if (url) {
    
    new QRCode(document.getElementById('qrcode'), {
        text: url,
        width: 256,
        height: 256
    });
} else {
    alert('No URL found. Please go back and enter a URL.');
}
