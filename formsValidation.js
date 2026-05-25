// 1. Pegamos a referência do formulário
const form = document.getElementById('raceForm');

// 2. Escutamos o momento em que o usuário tenta enviar (submit)
form.addEventListener('submit', function(event) {
  // Pegamos os valores digitados nos dois campos de e-mail
  const email = document.getElementById('userEmail').value;
  const confirmEmail = document.getElementById('confirmEmail').value;

  // 3. Fazemos a validação customizada: os e-mails são iguais?
  if (email !== confirmEmail) {
    // Se forem diferentes, impedimos o envio do formulário!
    event.preventDefault();
    
    // Mostramos um alerta explicando o erro
    alert('Ops! Os e-mails digitados não coincidem. Por favor, verifique.');
  }
});