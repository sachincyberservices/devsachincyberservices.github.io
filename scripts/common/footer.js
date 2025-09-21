document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearSpan = document.getElementById('currentYear-footer');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    // Footer Whatsapp CLick
    const whatsappLink = document.getElementById('footer-whatsapp');
    if (whatsappLink) {
        whatsappLink.addEventListener('click', function() {
            window.open('https://wa.me/918053769503', '_blank');
        });
    }
    //Footer Phone Click
    const phoneLink = document.getElementById('footer-mobile');
    if (phoneLink) {
        phoneLink.addEventListener('click', function() {
            window.location.href = 'tel:+918053769503';
        });
    }
    //Footer Email Click
    const emailLink = document.getElementById('footer-email');
    if (emailLink) {
        emailLink.addEventListener('click', function() {
            window.location.href = 'mailto:sachindehra503@gmailcom';
        });
    }
    //Footer Website Click
    const websiteLink = document.getElementById('footer-website');
    if (websiteLink) {
        websiteLink.addEventListener('click', function() {
            window.location.href = 'https://sachincyberservices.github.io';
        });
    }
    // Footer Address Click
    const addressLink = document.getElementById('footer-address');
if (addressLink) {
    addressLink.addEventListener('click', function() {
        // Option 1: Using coordinates
        const lat = 29.2093518; // Replace with your latitude
        const lng = 77.0706937; // Replace with your longitude
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        
        // Option 2: Using address
        // const address = "Your Full Address Here";
        // const url = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
        
        window.open(url, '_blank');
    });
}

});