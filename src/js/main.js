import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { initMenu } from './utils.js';

const app = document.querySelector('#app');

app.innerHTML = `
    ${renderHeader()}
    ${renderHero()}
`;

initMenu();