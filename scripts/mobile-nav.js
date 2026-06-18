// Wait until nav.html is loaded, then attach toggle behavior using delegation.

document.addEventListener('click', function (event) {
    const toggleButton = event.target.closest('.toggle-button');
    if (!toggleButton) {
        return;
    }

    const navbarLinks = document.getElementsByClassName('hamish')[0];
    if (navbarLinks) {
        navbarLinks.classList.toggle('active');
    }
});