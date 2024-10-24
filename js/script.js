// Inside script.js

document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.portfolio-categories li');
    const sections = document.querySelectorAll('.content-section');

    categories.forEach((category, index) => {
        category.addEventListener('click', () => {
            sections.forEach((section) => section.style.display = 'none');
            sections[index].style.display = 'block';
        });
    });
});
