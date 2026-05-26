// 1. Mapeamos os elementos do HTML que vamos manipular
const gridContainer = document.getElementById("customer-grid");
const fetchButton = document.getElementById("fetch-btn");

// 2. Criamos a função assíncrona que vai buscar os dados da API
async function loadCustomers() {
    try {
        // Coloca uma mensagem visual de carregamento na tela antes dos dados virem
        gridContainer.innerHTML = "Carregando dados dos clientes...";
        
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(apiUrl);

        // Se a resposta da rede falhar, jogamos um erro para o bloco catch
        if (!response.ok) {
            throw new Error(`Falha na conexão com o servidor. Status: ${response.status}`);
        }

        // Traduzimos a resposta de texto cru para um Array de Objetos JavaScript
        const customers = await response.json();

        // Limpamos o texto de "Carregando..." para colocar os cards
        gridContainer.innerHTML = "";

        // Loop para passar de um por um pelos clientes retornados
        customers.forEach((customer) => {
            // Criamos o container do cartão (card) na memória
            const card = document.createElement("div");
            card.classList.add("card");

            // Injetamos a estrutura HTML interna com os dados dinâmicos do usuário
            card.innerHTML = `
                <h3>${customer.name}</h3>
                <p class="email">📧 ${customer.email}</p>
                <p>🏢 <strong>Empresa:</strong> ${customer.company.name}</p>
                <p>📍 <strong>Cidade:</strong> ${customer.address.city}</p>
                

            `;

            // Jogamos o card novinho dentro do nosso grid visível na tela
            gridContainer.appendChild(card);
        });

    } catch (error) {
        // Se algo quebrar no meio do caminho, renderiza o erro direto na interface
        gridContainer.innerHTML = `<div class="status-msg" style="color: #e53e3e;">Não foi possível exibir os clientes. Erro: ${error.message}</div>`;
    }
}

// 3. Adicionamos o "vigia" de clique no botão para disparar a função
fetchButton.addEventListener("click", loadCustomers);