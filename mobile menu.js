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

document.addEventListener("DOMContentLoaded", function() {
    // Check if the visit count is already stored in localStorage
    let visitCount = localStorage.getItem('visitCount');

    if (!visitCount) {
        // If not, initialize it to 0
        visitCount = 0;
    }

    // Increment the visit count
    visitCount++;

    // Store the new visit count back to localStorage
    localStorage.setItem('visitCount', visitCount);

    // Check if the visitor's IP matches the owner's IP
    const ownerIP = "192.168.1.4"; // Replace with the owner's IP address
    const visitorIP = "192.168.1.4"; // Replace with the visitor's IP address

    if (ownerIP === visitorIP) {
        // Display the visit count in the footer only for the owner
        document.getElementById('visit-count').innerText = `Visit count: ${visitCount}`;
    }
});

