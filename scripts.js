// Hide loader after page load
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});





// up button
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
    });
}

// Function to toggle visibility of the scroll to top button based on scroll position
const scrollToTopButton = document.getElementById('scrollToTopButton');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });




 //Skill bar
 document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = `${percentage}%`;
    });
});

// show content
const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const overlayContent = card.querySelector('.overlay-content');
        const learnMoreLink = card.querySelector('.overlay-link');

        learnMoreLink.addEventListener('click', function(event) {
            event.preventDefault();
            overlayContent.style.display = 'flex';
        });

        overlayContent.addEventListener('click', function() {
            overlayContent.style.display = 'none';
        });
    });

