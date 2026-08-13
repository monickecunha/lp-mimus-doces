export function renderLocation() {
    return `
        <section id="endereco" class="location-section">
            <h2 class="section-title">Endereço</h2>
            
            <div class="location-container">
                <div class="map-wrapper">
                    <iframe 
                        src="https://maps.google.com/maps?q=R.%20Jos%C3%A9%20Ant%C3%B4nio%20Duarte,%20311%20-%20Vila%20Silveira%20Martins,%20Cachoeirinha%20-%20RS,%2094940-180&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div class="address-text">
                    <p>R. José Antônio Duarte, 311 - Vila Silveira Martins</p>
                    <p>Cachoeirinha - RS</p>
                    <p>CEP: 94940-180</p>
                </div>
            </div>
        </section>
    `;
}