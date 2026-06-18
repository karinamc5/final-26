// Mobile nav behavior: toggle and normalize links

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('hamish')[0];

if (toggleButton && navbarLinks) {
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
}

// Normalize nav links inserted from pages/nav.html so they work for local dev, live preview, and GitHub Pages
const navLinks = document.querySelectorAll('.hamish a[data-target]');
if (navLinks.length) {
    const inPages = location.pathname.includes('/pages/');
    const isLocal = location.hostname === '127.0.0.1' || location.hostname === 'localhost' || location.hostname === '';
    const repo = 'final-26';
    navLinks.forEach(a => {
        const t = a.getAttribute('data-target');
        let href = '#';
        if (isLocal) {
            // local dev or live preview: use relative paths
            href = inPages ? ((t === 'index') ? '../index.html' : `${t}.html`) : ((t === 'index') ? 'index.html' : `pages/${t}.html`);
        } else {
            // GitHub Pages (repo served under /<repo>/)
            href = (t === 'index') ? `/${repo}/index.html` : `/${repo}/pages/${t}.html`;
        }
        a.setAttribute('href', href);
    });
}