document.addEventListener('DOMContentLoaded', function () {
    const englishCategories = document.querySelectorAll('.portfolio-categories .text-en');
    const frenchCategories = document.querySelectorAll('.portfolio-categories .text-fr');
    const sections = document.querySelectorAll('.content-section');
    const toggleButton = document.getElementById('language-toggle');
    
    let isEnglish = true;

    // Function to handle showing content based on visible categories
    function handleCategoryClick(categories) {
        categories.forEach((category, index) => {
            category.addEventListener('click', () => {
                const isActive = category.classList.contains('active');
                
                // Reset all categories to default state
                categories.forEach(cat => {
                    cat.classList.remove('active');
                });

                // Hide all sections
                sections.forEach(section => section.classList.remove('active'));

                // If clicking on an inactive category, activate it
                if (!isActive) {
                    category.classList.add('active');
                    sections[index].classList.add('active');
                    
                    // Scroll to content on mobile
                    if (window.innerWidth <= 768) {
                        sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    }

    // Initialize with English categories
    handleCategoryClick(englishCategories);

    // Toggle button to switch language
    toggleButton.addEventListener('click', () => {
        isEnglish = !isEnglish;
        toggleButton.textContent = isEnglish ? 'FR' : 'EN';

        // Show/hide English and French text elements
        document.querySelectorAll('.text-en').forEach(el => el.style.display = isEnglish ? 'block' : 'none');
        document.querySelectorAll('.text-fr').forEach(el => el.style.display = isEnglish ? 'none' : 'block');

        // Re-initialize the category click handler with the correct language categories
        handleCategoryClick(isEnglish ? englishCategories : frenchCategories);
    });
});