import { renderHeader } from './components/Header.js';
import { initMenu } from './utils.js';

const app = document.querySelector('#app');

app.innerHTML = `
    ${renderHeader()}
`;

initMenu();