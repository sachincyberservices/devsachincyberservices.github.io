function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const hamburger = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const body = document.body;
    
    const isOpen = !mobileMenu.classList.contains('translate-x-full');
    
    if (isOpen) {
        // Close menu
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        body.classList.remove('overflow-hidden');
        hamburger.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        // Open menu
        mobileMenu.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        body.classList.add('overflow-hidden');
        hamburger.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
}

function toggleMobileDropdown(dropdownId) {
    const submenu = document.getElementById(dropdownId + '-submenu');
    const arrow = document.getElementById(dropdownId + '-arrow');
    
    if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
    } else {
        submenu.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Close mobile menu when clicking on links
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        if (!link.getAttribute('href').startsWith('#') || link.getAttribute('href') === '#contact') {
            toggleMobileMenu();
        }
    });
});
