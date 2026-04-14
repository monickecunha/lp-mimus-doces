# Landing Page: Mimus Doces

## 📖 Sobre o Projeto
Uma landing page desenvolvida para apresentar os produtos e a história da doceria **Mimus Doces**. O foco principal deste projeto foi aplicar conceitos de **Clean Code**, utilizando exclusivamente tecnologias nativas do navegador, sem a dependência de frameworks externos.

## 🛠 Tecnologias Utilizadas
* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização modularizada por componentes.
* **JavaScript (Vanilla):** Lógica de renderização de interface e componentização via ES6 Modules.

## 🏗 Arquitetura e Organização
O projeto foi estruturado para manter a separação clara de responsabilidades. O código fonte está dividido da seguinte forma:

* **`/assets`**: Destinado exclusivamente a arquivos estáticos (imagens, ícones e fontes).
* **`/src/css/components`**: Estilos isolados para cada seção da página, evitando o vazamento de estilos globais.
* **`/src/js/components`**: Componentes de UI (Header, Hero, Menu, About, etc.) que possuem a única responsabilidade de renderizar seu próprio HTML.
* **`/src/js/data`**: Separação dos dados do cardápio (bolos, docinhos, etc.) da lógica de apresentação.