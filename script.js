// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll Animations for Projects Section (Example)
const projectsSection = document.getElementById('projects');
const projectCards = document.querySelectorAll('.bg-white.p-6');

function revealProjectsOnScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const projectsOffset = projectsSection.offsetTop;

    if (scrollPosition > projectsOffset) {
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('opacity-100');
                card.classList.add('transform');
                card.classList.add('translate-y-0');
                card.classList.add('transition-all');
            }, index * 200);  // Delay for each card to appear in sequence
        });
    }
}

// Initial state: Projects section cards are hidden
projectCards.forEach(card => {
    card.classList.add('opacity-0', 'transform', 'translate-y-10');
});

// Listen to scroll events
window.addEventListener('scroll', revealProjectsOnScroll);

// You can also call this function on page load to ensure the animations work if the section is already in view
revealProjectsOnScroll();
