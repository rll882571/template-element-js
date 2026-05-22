// Selecionando os elementos do LocalStorage (Esquerda)
const inputLocal = document.getElementById('inputLocal');
const btnLocal = document.getElementById('btnLocal');
const txtLocal = document.getElementById('txtLocal');

// Selecionando os elementos do SessionStorage (Direita)
const inputSession = document.getElementById('inputSession');
const btnSession = document.getElementById('btnSession');
const txtSession = document.getElementById('txtSession');

const btnReset = document.getElementById('btnReset');

// --- FUNÇÃO PARA CARREGAR OS DADOS ASSIM QUE A PÁGINA ABRIR ---
function carregarDadosSalvos() {
    // Busca no Local Storage (se não existir, mostra 'Nenhum')
    const nomeSalvo = localStorage.getItem('usuario-nome');
    txtLocal.textContent = nomeSalvo ? nomeSalvo : 'Nenhum';

    // Busca no Session Storage (se não existir, mostra 'Nenhum') [cite: 522]
    const tokenSalvo = sessionStorage.getItem('sessao-token');
    txtSession.textContent = tokenSalvo ? tokenSalvo : 'Nenhum';
}

// --- EVENTOS DO LOCAL STORAGE (PERMANENTE) ---
btnLocal.addEventListener('click', () => {
    const valor = inputLocal.value.trim();
    if (valor !== "") {
        localStorage.setItem('usuario-nome', valor); // Salva na memória permanente
        txtLocal.textContent = valor; // Atualiza a tela
        inputLocal.value = ""; // Limpa o campo digitado
    }
});

// --- EVENTOS DO SESSION STORAGE (TEMPORÁRIO) ---
btnSession.addEventListener('click', () => {
    const valor = inputSession.value.trim();
    if (valor !== "") {
        sessionStorage.setItem('sessao-token', valor); // Salva na memória da aba [cite: 520]
        txtSession.textContent = valor; // Atualiza a tela
        inputSession.value = ""; // Limpa o campo digitado
    }
});

// --- BOTÃO DE LIMPAR TUDO ---
btnReset.addEventListener('click', () => {
    localStorage.clear(); // Apaga todo o local storage
    sessionStorage.clear(); // Apaga todo o session storage [cite: 526]
    
    // Atualiza o texto da tela
    txtLocal.textContent = 'Nenhum';
    txtSession.textContent = 'Nenhum';
});

// Executa assim que a página carrega pela primeira vez
carregarDadosSalvos();