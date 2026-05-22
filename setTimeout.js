const countdown = document.getElementById('countdown');
const btnStart = document.getElementById('startButton'); // Corrigido de bntStart para btnStart
let count = 10;

btnStart.addEventListener('click', function() {
    // Linha duplicada removida daqui!
    const intervalId = setInterval(() => {
        count -= 1;
        countdown.textContent = count;
        console.log(count);
        
        if (count === 0) {
            clearInterval(intervalId);
            countdown.textContent = "Time's up!"; // Mensagem final conforme o PDF
        }
    }, 2000);
});