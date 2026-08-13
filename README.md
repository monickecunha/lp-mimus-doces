# Landing Page: Mimus Doces

## 📖 Sobre o Projeto
Uma landing page desenvolvida para apresentar os produtos e a história da doceria **Mimus Doces**. O foco principal deste projeto foi aplicar conceitos de **Clean Code**, utilizando exclusivamente tecnologias nativas do navegador, sem a dependência de frameworks externos.

## 🛠 Tecnologias Utilizadas
* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização modularizada por componentes.
* **JavaScript (Vanilla):** Lógica de renderização de interface e componentização via ES6 Modules.

## 🏗 Arquitetura e Organização
O projeto foi estruturado para manter a separação clara de responsabilidades. O código fonte está dividido da seguinte forma:

```text
/
├── assets/
│   ├── icons/
│   └── images/
│       ├── bolos/
│       ├── docinhos/
│       └── sobremesas/
├── src/
│   ├── CSS/
│   │   ├── components/
|   |   |   ├── About.css
|   |   |   ├── Contact.css
|   |   |   ├── Footer.css
|   |   |   ├── Header.css
|   |   |   ├── Hero.css
|   |   |   ├── Location.css
|   |   |   ├── Menu.css
|   |   |   └── Modal.css
|   |   ├── global.css
│   |   └── main.css
│   ├── data/
│   └── js/
│       ├── components/
|       |   ├── About.js
|       |   ├── Contact.js
|       |   ├── Footer.js
|       |   ├── Header.js
|       |   ├── Hero.js
|       |   ├── Location.js
|       |   ├── Menu.js
|       |   └── Modal.js
|       ├── utils/
|       |   ├── carousel.js
|       |   ├── menu.js
|       |   └── modal.js
│       └── main.js
├── index.html
└── README.md