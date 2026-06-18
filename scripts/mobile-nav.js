// Mobile nav behavior: toggle and normalize links

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('hamish')[0];

if (toggleButton && navbarLinks) {
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
}

// Normalize nav links inserted from pages/nav.html so they work both from root and /pages/
const navLinks = document.querySelectorAll('.hamish a[data-target]');
if (navLinks.length) {
    const inPages = location.pathname.includes('/pages/');
    navLinks.forEach(a => {
        const t = a.getAttribute('data-target');
        let href = '#';
        if (inPages) {
            href = (t === 'index') ? '../index.html' : `${t}.html`;
        } else {
            href = (t === 'index') ? 'index.html' : `pages/${t}.html`;
        }
        a.setAttribute('href', href);
    });
}