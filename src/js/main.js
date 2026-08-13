import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderMenu } from './components/Menu.js';
import { renderModal } from './components/Modal.js';
import { initMenu } from './utils/menu.js';
import { initCarousel } from './utils/carousel.js';
import { initModal } from './utils/modal.js';

const app = document.querySelector('#app');

app.innerHTML = `
    ${renderHeader()}
    ${renderHero()}
    ${renderMenu()}
    ${renderModal()}
`;

initMenu();
initCarousel();
initModal();