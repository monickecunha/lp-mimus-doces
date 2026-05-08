export function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.menu-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    function updateCarousel() {
        if (!track || cards.length === 0) return;

        const containerWidth = document.querySelector('.carousel-container').offsetWidth;
        const cardWidth = cards[0].offsetWidth;
        const gap = 20; 
        
        const visibleCards = Math.round(containerWidth / cardWidth);
        
        const maxIndex = cards.length - visibleCards;

    
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        const moveAmount = currentIndex * (cardWidth + gap);
        track.style.transform = `translateX(-${moveAmount}px)`;

        prevBtn.classList.toggle('hidden', currentIndex === 0);
        nextBtn.classList.toggle('hidden', currentIndex >= maxIndex);
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });

    // Ajustar se o usuário redimensionar a tela (ex: virar o celular)
    window.addEventListener('resize', updateCarousel);
    
    updateCarousel();
}