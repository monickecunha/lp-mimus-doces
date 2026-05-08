import { menuData } from '../data/menuData.js';

export function initModal() {
    const modal = document.getElementById("menu-modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close-modal");
    const buttons = document.querySelectorAll(".btn-ver-mais");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            const data = menuData[category];

            if (data) {

                modalBody.innerHTML = `
                    <h2 class="modal-title">${data.titulo}</h2>
                    <p class="modal-price"><strong>${data.preco}</strong></p>
                    <p class="modal-details">${data.detalhes}</p>
                    <div class="modal-divider"></div>
                    <h3>Sabores:</h3>
                    <ul class="modal-list">
                        ${data.sabores.map(sabor => `<li>${sabor}</li>`).join('')}
                    </ul>
                    <a href="https://wa.me/5551989274570" target="_blank" class="btn-order-modal">
                        Encomendar agora
                    </a>
                `;
                
                modal.classList.add("show"); // Mostra o modal
                document.body.style.overflow = "hidden"; // Trava o scroll da página ao fundo
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    };

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
}