document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Add click event listeners to all menu items
    var menuItems = navMenu.querySelectorAll('li a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navMenu.classList.remove('show');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links
            this.classList.add('active'); // Add active class to the clicked link
        });
    });
});


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active'); // Toggle the active class
    });
});


