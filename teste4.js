// Selecionando os elementos do HTML
const btnIniciar = document.getElementById('btnIniciar');
const visor = document.getElementById('visor');
const alertaFim = document.getElementById('alertaFim');

// Ouvinte de evento para o clique do botão
btnIniciar.addEventListener('click', function() {
    
    // Configurações iniciais antes do loop começar
    let count = 0;
    visor.textContent = count; // Reseta o visor para 0 na tela
    visor.style.color = "#3182ce"; // Deixa o número azul
    alertaFim.style.display = "none"; // Esconde o alerta de fim
    btnIniciar.disabled = true; // Desativa o botão para o usuário não clicar duas vezes
    btnIniciar.textContent = "Contando...";

    // --- SEU CÓDIGO COMEÇA AQUI ---
    const intervalId = setInterval(() => {
        count += 1;
        
        // Atualiza o número gigante lá na tela do navegador
        visor.textContent = count;
        console.log(count); // Continua printando no console também!
        
        // Se chegar em 3, para o cronômetro
        if (count === 3) {
            clearInterval(intervalId);
            
            // Ações extras que acontecem quando o tempo acaba:
            visor.style.color = "#38a169"; // Muda a cor do número para verde
            alertaFim.style.display = "block"; // Mostra a mensagem de sucesso
            btnIniciar.disabled = false; // Reativa o botão para poder treinar de novo
            btnIniciar.textContent = "Iniciar Contagem";
        }
    }, 1000); // 1000 milissegundos = 1 segundo
    // --- SEU CÓDIGO TERMINA AQUI ---

});