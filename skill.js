document.addEventListener("DOMContentLoaded", function() {
    // Function to animate progress bars
    function animateProgressBars(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Update these values to match your skill levels
                var skillLevels = {
                    "skill1-progress": 90,
                    "skill2-progress": 80,
                    "skill3-progress": 95,
                    "skill4-progress": 90,
                    "skill5-progress": 90,
                    
                };

                for (var skill in skillLevels) {
                    var progressElement = document.getElementById(skill);
                    if (progressElement) {
                        // Add a check to ensure the progress bar is not already animated
                        if (progressElement.style.width === '') {
                            progressElement.style.width = skillLevels[skill] + "%";
                            progressElement.setAttribute("data-percentage", skillLevels[skill]);
                        }
                    }
                }

                // Stop observing once the animation has been triggered
                observer.unobserve(entry.target);
            }
        });
    }

    // Create an intersection observer to trigger animation
    const observer = new IntersectionObserver(animateProgressBars, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the skills section is visible
    });

    // Target the skills section
    const skillsSection = document.querySelector(".skills");
    if (skillsSection) {
        observer.observe(skillsSection);
    } else {
        console.error('Skills section not found.');
    }
});


// scrollbar
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.services-container');

    function scrollServices() {
        const scrollAmount = container.scrollLeft + 1;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
        } else {
            container.scrollLeft += 1;
        }
    }

    let scrollInterval = setInterval(scrollServices, 13); // Adjust the interval as needed

    container.addEventListener('mouseover', () => {
        clearInterval(scrollInterval);
    });

    container.addEventListener('mouseout', () => {
        scrollInterval = setInterval(scrollServices, 13);
    });
});


// top
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the button based on scroll position
window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 0) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

document.getElementById('nav-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
});

