const formulario = document.getElementById('meuFormulario');

const inputNome = document.getElementById('inputNome');
const erroNome = document.getElementById('erroNome');

const inputIdade = document.getElementById('inputIdade');
const erroIdade = document.getElementById('erroIdade');

const sucessoMensagem = document.getElementById('sucessoMensagem');

// --- FUNÇÃO DE VALIDAÇÃO CUSTOMIZADA ---
function validarCampo(input, elementoErro, mensagemPersonalizada) {
    // 1. O checkValidity() pergunta ao navegador se o campo segue as regras do HTML
    if (input.checkValidity()) {
        elementoErro.textContent = ""; // Limpa a mensagem de erro se estiver tudo certo
        input.classList.remove('touched');
        return true;
    } else {
        // 2. Se houver erro, podemos capturar ou aplicar mensagens específicas
        input.classList.add('touched');
        
        // Se o erro for porque está vazio:
        if (input.validity.valueMissing) {
            elementoErro.textContent = "Este campo é obrigatório!";
        } 
        // Se o erro for porque não atingiu o tamanho mínimo (letras):
        else if (input.validity.tooShort) {
            elementoErro.textContent = `Muito curto! Digite pelo menos ${input.minLength} caracteres.`;
        }
        // Se o erro for porque o número está fora do intervalo (idade):
        else if (input.validity.rangeUnderflow || input.validity.rangeOverflow) {
            elementoErro.textContent = mensagemPersonalizada;
        }
        
        return false;
    }
}

// Ouvintes de evento para validar enquanto o usuário digita
inputNome.addEventListener('input', () => validarCampo(inputNome, erroNome));
inputIdade.addEventListener('input', () => validarCampo(inputIdade, erroIdade, "Você precisa ter entre 18 e 100 anos!"));

// --- EVENTO DE SUBMIT DO FORMULÁRIO ---
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede a página de recarregar

    // Valida os dois campos antes de prosseguir
    const nomeValido = validarCampo(inputNome, erroNome);
    const idadeValida = validarCampo(inputIdade, erroIdade, "Você precisa ter entre 18 e 100 anos!");

    // Se ambos passarem na Validation API, mostramos o sucesso
    if (nomeValido && idadeValida) {
        sucessoMensagem.style.display = "block";
        formulario.style.display = "none"; // Esconde o formulário
    } else {
        sucessoMensagem.style.display = "none";
    }
});