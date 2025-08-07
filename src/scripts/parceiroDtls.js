const urlParams = new URLSearchParams(window.location.search);
const parceiroId = urlParams.get('id');
const objetivosSection = document.getElementById('objetivos');

if (!parceiroId) {
    objetivosSection.innerHTML = `
                <div class="error">Erro: Nenhum parceiro selecionado.</div>
            `;
} else {
    fetch(`https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros/${parceiroId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Parceiro não encontrado');
            }
            return response.json();
        })
        .then(data => {
            const materiais = [
                { chave: 'papel', nome: 'Papel', emoji: '📄' },
                { chave: 'plastico', nome: 'Plástico', emoji: '♻️' },
                { chave: 'vidro', nome: 'Vidro', emoji: '🍾' },
                { chave: 'metal', nome: 'Metal', emoji: '🔩' },
                { chave: 'oleoCozinha', nome: 'Óleo de cozinha', emoji: '🛢️' },
                { chave: 'pilhaBateria', nome: 'Pilhas e baterias', emoji: '🔋' },
                { chave: 'eletronico', nome: 'Eletrônicos', emoji: '💻' },
                { chave: 'roupa', nome: 'Roupa', emoji: '👕' },
                { chave: 'outros', nome: 'Outros', emoji: '📦' }
            ];

            const materiaisAceitos = materiais
                .filter(m => data[m.chave])
                .map(m => `<span>${m.emoji} ${m.nome}</span>`)
                .join('');

            const tipoParce = data.tipoParceiro || 'default';
            objetivosSection.classList.add(`car_${tipoParce}`);

            objetivosSection.innerHTML = `
                        <h2>${data.nomeParceiro || "Nome não cadastrado"}</h2>
                        <p><strong>Responsável:</strong> ${data.responsavelParceiro || "Responsável não cadastrado"}</p>
                        <p><strong>Telefone:</strong> ${data.telResponsavel || "Telefone não cadastrado"}</p>
                        <p><strong>E-mail:</strong> <a href="mailto:${data.emailResponsavel || ''}" aria-label="Enviar e-mail para ${data.emailResponsavel || 'contato não disponível'}">${data.emailResponsavel || "E-mail não cadastrado"}</a></p>
                        <p><strong>Materiais aceitos:</strong></p>
                        <div class="materiais-aceitos">${materiaisAceitos || 'Nenhum material aceito cadastrado.'}</div>
                        <p><span class="bairro">#${data.tipoParceiro || "Tipo não cadastrado"}</span></p>
                        <button class="back-button" aria-label="Voltar para a lista de parceiros"><i class="fas fa-arrow-left"></i> Voltar</button>
                    `;

            document.querySelector('.back-button').addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        })
        .catch(error => {
            objetivosSection.innerHTML = `
                        <div class="error">Erro ao carregar os detalhes do parceiro: ${error.message}</div>
                    `;
        });
}