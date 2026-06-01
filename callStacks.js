// Seleção dos elementos do DOM
const stackElement = document.getElementById('stack');
const consoleElement = document.getElementById('console-log');
const btnRun = document.getElementById('btn-run');
const btnReset = document.getElementById('btn-reset');

// Função auxiliar para criar um atraso (efeito câmera lenta)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Função para adicionar mensagem ao console virtual da tela
function logToScreen(message) {
  const line = document.createElement('div');
  line.className = 'console-line';
  line.innerText = `> ${message}`;
  consoleElement.appendChild(line);
  consoleElement.scrollTop = consoleElement.scrollHeight; // Auto-scroll
}

// Função para empilhar (PUSH) visualmente
function pushToStack(functionName) {
  // Remove a mensagem de "Pilha Vazia" se for o primeiro item
  const emptyMsg = stackElement.querySelector('.stack-empty');
  if (emptyMsg) emptyMsg.style.display = 'none';

  const item = document.createElement('div');
  item.className = 'stack-item';
  item.id = `stack-${functionName}`;
  item.innerText = `${functionName}()`;
  stackElement.appendChild(item);
}

// Função para desempilhar (POP) visualmente
function popFromStack(functionName) {
  const item = document.getElementById(`stack-${functionName}`);
  if (item) {
    item.style.backgroundColor = '#f38ba8'; // Altera cor para vermelho antes de sumir
    setTimeout(() => {
      item.remove();
      // Se a pilha esvaziar, mostra a mensagem de pilha vazia
      if (stackElement.children.length === 0) {
        stackElement.innerHTML = '<div class="stack-empty">Pilha Vazia (Global Execution Context)</div>';
      }
    }, 300); // Pequeno tempo para ver a animação de saída
  }
}

// --- Simulação das suas Funções ---

async function thirdFunction() {
  pushToStack('thirdFunction');
  logToScreen("Third Function");
  await delay(1500);

  logToScreen("Back to Third Function");
  await delay(1500);
  popFromStack('thirdFunction');
}

async function secondFunction() {
  pushToStack('secondFunction');
  logToScreen("Second Function");
  await delay(1500);

  // Chama a terceira função e espera ela terminar
  await thirdFunction();
  await delay(1500);

  logToScreen("Back to Second Function");
  await delay(1500);
  popFromStack('secondFunction');
}

async function firstFunction() {
  pushToStack('firstFunction');
  logToScreen("First Function");
  await delay(1500);

  // Chama a segunda função e espera ela terminar
  await secondFunction();
  await delay(1500);

  logToScreen("Back to First Function");
  await delay(1500);
  popFromStack('firstFunction');
}

// Evento do botão Executar
btnRun.addEventListener('click', async () => {
  btnRun.disabled = true;
  btnReset.disabled = true;
  consoleElement.innerHTML = ''; // Limpa console anterior
  
  // Inicia o fluxo
  await firstFunction();

  // Libera o botão de reset após o término total
  btnReset.disabled = false;
});

// Evento do botão Resetar
btnReset.addEventListener('click', () => {
  stackElement.innerHTML = '<div class="stack-empty">Pilha Vazia (Global Execution Context)</div>';
  consoleElement.innerHTML = '';
  btnRun.disabled = false;
  btnReset.disabled = true;
});