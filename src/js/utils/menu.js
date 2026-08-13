export function initMenu() {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const links = document.querySelectorAll('.nav-links a'); 

    if (toggleBtn && navLinks) {

        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggleBtn.classList.toggle('is-active');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                toggleBtn.classList.remove('is-active');
            });
        });
    }
}