// Obtém o formulário e a tabela
const cadastroForm = document.getElementById('cadastroForm');
const cadastroTableBody = document.getElementById('cadastroTableBody');

// Função para adicionar um novo cadastro na tabela
function adicionarCadastro(nome, email) {
    const novaLinha = document.createElement('tr');
    
    const colunaNome = document.createElement('td');
    colunaNome.textContent = nome;
    
    const colunaEmail = document.createElement('td');
    colunaEmail.textContent = email;
    
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEmail);
    
    cadastroTableBody.appendChild(novaLinha);
}

// Evento de envio do formulário
cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if(nome && email) {
        adicionarCadastro(nome, email);

        // Limpa os campos do formulário
        cadastroForm.reset();
    }
});
