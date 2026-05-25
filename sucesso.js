// 1. Capturamos o pedaço da URL que veio depois da interrogação '?'
const textoDaUrl = window.location.search;

// 2. Criamos o decodificador entregando o texto para o URLSearchParams
const construtorParametros = new URLSearchParams(textoDaUrl);

// 3. Pegamos os valores usando o nome exato dos atributos ('name') do formulário
const nomeDoAtleta = construtorParametros.get('fullName');
const idadeDoAtleta = construtorParametros.get('runnerAge');

// 4. Se encontrarmos os dados na URL, atualizamos o texto da tela
if (nomeDoAtleta && idadeDoAtleta) {
  // Criamos a frase personalizada
  const mensagem = `Parabéns, <strong>${nomeDoAtleta}</strong>! Sua inscrição para o Clube de Corrida foi realizada com sucesso. Confirmamos que você tem ${idadeDoAtleta} anos e está apto para o circuito.`;
  
  // Encontramos o parágrafo pelo ID e injetamos o texto nele
  document.getElementById('welcomeMessage').innerHTML = mensagem;
} else {
  // Caso alguém tente acessar a página diretamente sem passar pelo formulário
  document.getElementById('welcomeMessage').innerText = "Nenhum dado de inscrição foi encontrado.";
}