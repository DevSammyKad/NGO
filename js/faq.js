


// for FAQ section in contact page

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const icon = accordion.querySelector('.icon');
    const answer = accordion.querySelector('.answer');

    accordion.addEventListener('click', () => {
        // Close other open accordions
        accordions.forEach(otherAccordion => {
            if (otherAccordion !== accordion) {
                otherAccordion.querySelector('.icon').classList.remove('active');
                otherAccordion.querySelector('.answer').classList.remove('active');
            }
        });

        // Toggle active state for the clicked accordion
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    });
});