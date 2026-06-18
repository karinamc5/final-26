// Mobile nav behavior: toggle and normalize links

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('hamish')[0];

if (toggleButton && navbarLinks) {
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
}

// Normalize nav links inserted from pages/nav.html so they work from root and pages/, using repo-rooted absolute paths
const navLinks = document.querySelectorAll('.hamish a[data-target]');
if (navLinks.length) {
    const repo = 'final-26';
    navLinks.forEach(a => {
        const t = a.getAttribute('data-target');
        const href = (t === 'index') ? `/${repo}/index.html` : `/${repo}/pages/${t}.html`;
        a.setAttribute('href', href);
    });
}