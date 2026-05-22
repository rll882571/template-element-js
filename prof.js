// Variáveis Globais (Passos 2 e 3)
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json'; 
const cards = document.querySelector('#cards');

// Função Assíncrona para buscar os dados (Passos 4, 5, 6, 9 e 10)
async function getProphetData() {
    // Busca os dados da URL (Passo 5)
    const response = await fetch(url); 
    
    // Converte a resposta para JSON (Passo 6)
    const data = await response.json(); 
    
    // Passo 7 (Teste): Descomente para testar a busca de dados
    // console.table(data.prophets); 

    // Chama a função de exibição, passando apenas o array 'prophets' (Passos 9 e 10)
    displayProphets(data.prophets); 
}

// Função Expression para exibir os profetas (Passos 11, 12 e 13)
const displayProphets = (prophets) => { 
    // Itera sobre cada objeto 'prophet' no array (Passo 12)
    prophets.forEach((prophet) => {
        // 1. Cria um elemento <section> para o cartão (card) (Passo 13.1)
        let card = document.createElement('section');
        
        // 2. Cria um elemento <h2> para o nome completo (Passo 13.2)
        let fullName = document.createElement('h2');
        
        // 3. Cria um elemento <img> para o retrato (Passo 13.3)
        let portrait = document.createElement('img');

        // Cria elementos <p> adicionais para Data e Local de Nascimento (Passo 265 - Styling)
        let dob = document.createElement('p');
        let pob = document.createElement('p');
        
        // 4. Popula o <h2> com o nome completo usando template string (Passo 13.4)
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        
        // Popula os parágrafos de data e local de nascimento (Passo 265)
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;
        
        // 5. Configura os atributos da imagem (Passo 13.5)
        portrait.setAttribute('src', prophet.imageurl);                 // src (Passo 13.5.1)
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`); // alt (Passo 13.5.2)
        portrait.setAttribute('loading', 'lazy');                       // loading (Passo 13.5.3)
        portrait.setAttribute('width', '440');                          // width (Passo 13.5.4)
        portrait.setAttribute('height', '500');                         // height (Passo 13.5.5)
        
        // 6. Anexa os elementos ao cartão <section> (Passo 13.6)
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);

        // 7. Anexa o cartão <section> completo ao div 'cards' no HTML (Passo 13.7)
        cards.appendChild(card);
    });
}

// Chamada da função para iniciar o processo (Passo 8)
getProphetData();