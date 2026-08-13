import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderMenu } from './components/Menu.js';
import { renderModal } from './components/Modal.js';
import { renderAbout } from './components/About.js';
import { renderContact } from './components/Contact.js';
import { renderLocation } from './components/Location.js';
import { renderFooter } from './components/Footer.js';


import { initMenu } from './utils/menu.js';
import { initCarousel } from './utils/carousel.js';
import { initModal } from './utils/modal.js';

const app = document.querySelector('#app');

app.innerHTML = `
    ${renderHeader()}
    ${renderHero()}
    ${renderMenu()}
    ${renderModal()}
    ${renderAbout()}
    ${renderContact()}
    ${renderLocation()}
    ${renderFooter()}
`;

initMenu();
initCarousel();
initModal();