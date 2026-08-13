export function renderFooter() {
    return `
        <footer class="footer-section">
            <div class="footer-content">
                
                <div class="footer-brand">
                    <!-- Você pode reaproveitar a logo do Header aqui -->
                    <h3 class="footer-logo-text">Mimus Doces</h3>
                    <p>Adoçando seus melhores momentos com ingredientes selecionados e muito afeto.</p>
                </div>
                
                <div class="footer-hours">
                    <h4>Atendimento</h4>
                    <p>Trabalhamos sob encomenda</p>
                </div>

                <div class="footer-links">
                    <h4>Navegação</h4>
                    <a href="#hero">Início</a>
                    <a href="#menu">Cardápio</a>
                    <a href="https://wa.me/5551989274570" target="_blank" >Fazer Encomenda</a>
                </div>

            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2026 Mimus Doces. Todos os direitos reservados.</p>
                <p class="dev-signature">
                    Desenvolvido com ❤️ por <a href="https://github.com/monickecunha" target="_blank">Monicke</a>
                </p>
            </div>
        </footer>
    `;
}