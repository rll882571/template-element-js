// Dados simulados do nosso banco de dados
const bancoDeDados = [
  { id: 1, categoria: 'natureza', nome: '🌲 Floresta Tropical' },
  { id: 2, categoria: 'cidade', nome: '🏙️ Nova York à Noite' },
  { id: 3, categoria: 'natureza', nome: '🏔️ Montanhas Nevadas' },
  { id: 4, categoria: 'cidade', nome: '🗼 Torre Eiffel' }
];

// 1. Função que BUSCA os dados (ela aceita um CALLBACK como segundo parâmetro)
function buscarDadosDoServidor(categoriaFiltro, acaoDeCallback) {
  const statusDiv = document.getElementById('status');
  statusDiv.innerText = "Buscando dados no servidor (aguarde)...";
  
  // Limpa a galeria atual enquanto carrega
  document.getElementById('galeria').innerHTML = "";

  // Simulando o tempo de espera da internet (1 segundo)
  setTimeout(function() {
    statusDiv.innerText = "Dados carregados com sucesso!";
    
    // Filtra os dados com base na escolha do usuário
    let resultado = [];
    if (categoriaFiltro === 'todos') {
      resultado = bancoDeDados;
    } else {
      resultado = bancoDeDados.filter(item => item.categoria === categoriaFiltro);
    }

    // A MÁGICA DO CALLBACK: Executa a função que recebemos por parâmetro,
    // passando o resultado encontrado para ela.
    acaoDeCallback(resultado);

  }, 1000); 
}

// 2. Função de CALLBACK (ela sabe apenas como desenhar as coisas na tela)
function renderizarTela(itens) {
  const galeriaDiv = document.getElementById('galeria');
  
  // Cria os elementos HTML para cada item encontrado
  itens.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-galeria';
    card.innerText = item.nome;
    galeriaDiv.appendChild(card);
  });
}

// 3. Função principal disparada pelo clique dos botões do HTML
function filtrarGaleria(categoria) {
  // Passamos a categoria desejada E a função 'renderizarTela' como um CALLBACK!
  buscarDadosDoServidor(categoria, renderizarTela);
}

// Inicia o site mostrando todos quando carrega a página
filtrarGaleria('todos');