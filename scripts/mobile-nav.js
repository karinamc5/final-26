// Wait until nav.html is loaded, then attach toggle behavior using delegation.

function fixNavLinks() {
    const isNested = window.location.pathname.includes('/pages/');

    document.querySelectorAll('.hamish a[data-href]').forEach((anchor) => {
        const target = anchor.dataset.href;
        if (isNested) {
            anchor.href = target.startsWith('pages/') ? target.replace(/^pages\//, '') : `../${target}`;
        } else {
            anchor.href = target;
        }
    });
}

new MutationObserver((mutations, observer) => {
    if (document.querySelector('.hamish a[data-href]')) {
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