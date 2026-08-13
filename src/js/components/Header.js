export function renderHeader() {
    return `
        <header class="main-header">
            <nav class="navbar">
                <div class="logo">
                    <img src="assets/icons/logo-mimus-doces.svg" alt="Logo da Mimus Doces">
                </div>
                
                <button class="menu-toggle" aria-label="Abrir menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>

                <ul class="nav-links">
                    <li><a href="#hero">Início</a></li>
                    <li><a href="#menu">Cardápio</a></li>
                    <li><a href="#about">História</a></li>
                    <li><a href="#contact">Contato</a></li>
                    <li><a href="#adress">Endereço</a></li>
                </ul>
            </nav>
        </header>
    `;
}