export function renderMenu() {
    return `
        <section id="menu" class="menu-section">
            <h2 class="section-title">Nossas Delícias</h2>
            <div class="carousel-container">
                <div class="carousel-track">
                    <div class="menu-card active">
                        <img src="../../assets/images/bolos/bolo.jpeg" alt="Bolos de Aniversário">
                        <div class="card-info">
                    <h3>Bolos de Aniversário</h3>
                    <button class="btn-ver-mais" onclick="openModal('bolos')">Ver Sabores e Preços</button>
                </div>
            </div>

            <div class="menu-card">

                <img src="../../assets/images/docinhos/candy.jpeg" alt="Docinhos">

                <div class="card-info">

                    <h3>Docinhos Artesanais</h3>

                    <button class="btn-ver-mais" onclick="openModal('docinhos')">Ver Sabores</button>

                </div>

            </div>

            <div class="menu-card">

                <img src="../../assets/images/sobremesas/sobremesa.jpeg" alt="Sobremesas">

                <div class="card-info">

                    <h3>Sobremesas na Travessa</h3>

                    <button class="btn-ver-mais" onclick="openModal('sobremesas')">Ver Detalhes</button>

                </div>s

            </div>

        </div>



        <button class="prev" aria-label="Anterior">&#10094;</button>

        <button class="next" aria-label="Próximo">&#10095;</button>

    </div>

</section>

`;

}