// Passo 2.1: Selecionar todos os itens da lista li dentro de #items
const items = document.querySelectorAll('#items li'); // [cite: 156, 159]

// Passo 2.2: Loop para registrar os valores de data-* no console usando .dataset
items.forEach(item => {
  console.log('--- Item Detectado ---');
  console.log('Name:', item.dataset.name);         // [cite: 157, 161]
  console.log('Category:', item.dataset.category); // [cite: 157, 162]
  console.log('Color:', item.dataset.color);       // [cite: 157, 163]
});

// Passo 2.3: Criar um elemento div para exibir os detalhes abaixo da lista
const details = document.createElement('div'); // [cite: 164, 166]
details.id = "details-box"; // Atribui um ID para linkar com o estilo CSS
document.body.appendChild(details); // Injeta a div no corpo do documento [cite: 166]

// Adicionar o Event Listener de clique para cada item da lista
items.forEach(item => { // [cite: 171]
  item.addEventListener('click', () => { // [cite: 172]
    // Injeta a estrutura HTML com os valores dinâmicos do dataset do item clicado
    details.innerHTML = `
      <h2>Item Details</h2>
      <p>Name: ${item.dataset.name}</p>
      <p>Category: ${item.dataset.category}</p>
      <p>Color: ${item.dataset.color}</p>
    `; // [cite: 173, 174, 175, 177, 178, 179]
  });
});