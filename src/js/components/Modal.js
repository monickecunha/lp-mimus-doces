export function renderModal() {
    return `
        <div id="menu-modal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div id="modal-body">
                    <!-- O conteúdo dinâmico será injetado aqui pelo modal.js -->
                </div>
            </div>
        </div>
    `;
}