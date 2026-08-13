import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderMenu } from './components/Menu.js';
import { initMenu } from './utils/menu.js';
import { initCarousel } from './utils/carousel.js';

const app = document.querySelector('#app');

app.innerHTML = `
    ${renderHeader()}
    ${renderHero()}
    ${renderMenu()}
`;

initMenu();
initCarousel();
