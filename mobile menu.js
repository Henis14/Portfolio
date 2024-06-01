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



