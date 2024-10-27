// Updated script.js with transitions and active category highlight

document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.portfolio-categories li');
    const sections = document.querySelectorAll('.content-section');

    categories.forEach((category, index) => {
        category.addEventListener('click', () => {
            // Remove active class from all categories and add to the clicked one
            categories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');

            // Hide all sections and show the selected one with transition
            sections.forEach((section) => section.classList.remove('active'));
            sections[index].classList.add('active');
        });
    });
});

// Select all category items
const categories = document.querySelectorAll('.portfolio-category');

categories.forEach(category => {
    category.addEventListener('click', () => {
        // Toggle 'active' class to switch symbol
        category.classList.toggle('active');
    });
});

