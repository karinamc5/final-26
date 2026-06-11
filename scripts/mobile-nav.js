// fetch('nav.html')

//  .then(response => response.text())

//  .then(data => {

// document.getElementById('nav-placeholder').innerHTML = data;

// Wait until nav.html is loaded, THEN attach toggle behavior

const toggleButton = document.getElementsByClassName('toggle-button')[0];

const navbarLinks = document.getElementsByClassName('hamish')[0];

if (toggleButton && navbarLinks) {

toggleButton.addEventListener('click', () => {

navbarLinks.classList.toggle('active');

 });

 }