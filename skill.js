//Skill bar
document.addEventListener("DOMContentLoaded", function() {
    // Update these values to match your skill levels
    var skillLevels = {
        "skill1-progress": 95, // Skill 1: 80%
        "skill2-progress": 75, // Skill 2: 60%
        "skill3-progress": 95, // Skill 3: 90%
        "skill4-progress": 85, // Skill 1: 80%
        "skill5-progress": 75, // Skill 2: 60%
        "skill6-progress": 85  // Skill 3: 90%
        // Add more skills as needed
    };

    for (var skill in skillLevels) {
        document.getElementById(skill).style.width = skillLevels[skill] + "%";
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