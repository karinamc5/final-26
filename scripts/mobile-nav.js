// Wait until nav.html is loaded, then attach toggle behavior using delegation.

function fixNavLinks() {
    const isNested = window.location.pathname.includes('/pages/');

    document.querySelectorAll('.hamish a[data-target]').forEach((anchor) => {
        const target = anchor.dataset.target;
        if (isNested) {
            anchor.href = target;
        } else {
            anchor.href = target === 'index.html' ? 'index.html' : `pages/${target}`;
        }
    });
}

new MutationObserver((mutations, observer) => {
    if (document.querySelector('.hamish a[data-target]')) {
        fixNavLinks();
        observer.disconnect();
    }
}).observe(document.documentElement, { childList: true, subtree: true });

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