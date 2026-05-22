// ===============================
// 1. Seleção dos elementos HTML
// ===============================
const btnLocalizar = document.getElementById('btnLocalizar');
const painelDados = document.getElementById('painelDados');
const mensagemErro = document.getElementById('mensagemErro');

const latTexto = document.getElementById('latTexto');
const lonTexto = document.getElementById('lonTexto');

const alertaGps = document.querySelector('.alerta-gps');


// ===============================
// 2. Evento do botão
// ===============================
btnLocalizar.addEventListener('click', function () {

    // Verifica suporte da API
    if (!navigator.geolocation) {
        mensagemErro.style.display = "block";
        mensagemErro.textContent =
            "A geolocalização não é suportada neste navegador.";
        return;
    }

    // Estado visual enquanto carrega
    btnLocalizar.textContent = "Obtendo localização...";
    btnLocalizar.disabled = true;

    mensagemErro.style.display = "none";

    // ===============================
    // API de Geolocalização
    // ===============================
    navigator.geolocation.getCurrentPosition(

        // ========= SUCESSO =========
        function (position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Mostra coordenadas formatadas
            latTexto.textContent = latitude.toFixed(5);
            lonTexto.textContent = longitude.toFixed(5);

            // Descobre região
            const regiao = getRegion(latitude, longitude);

            // Atualiza mensagem
            alertaGps.innerHTML =
                `✓ Localizado em: <strong>${regiao}</strong>`;

            // Mostra painel
            painelDados.style.display = "block";

            // Atualiza botão
            btnLocalizar.textContent = "Atualizar Posição";
            btnLocalizar.disabled = false;
        },

        // ========= ERRO =========
        function (error) {

            painelDados.style.display = "none";
            mensagemErro.style.display = "block";

            switch (error.code) {

                case error.PERMISSION_DENIED:
                    mensagemErro.textContent =
                        "Permissão negada. Ative a localização do navegador.";
                    break;

                case error.POSITION_UNAVAILABLE:
                    mensagemErro.textContent =
                        "Não foi possível obter sua localização.";
                    break;

                case error.TIMEOUT:
                    mensagemErro.textContent =
                        "A solicitação demorou demais.";
                    break;

                default:
                    mensagemErro.textContent =
                        "Erro desconhecido ao obter localização.";
            }

            btnLocalizar.textContent = "Obter Minha Posição";
            btnLocalizar.disabled = false;
        },

        // ========= CONFIGURAÇÕES =========
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
});


// ===============================
// 3. Função para identificar região
// ===============================
function getRegion(lat, lon) {

    // Normaliza longitude
    if (lon > 180) {
        lon -= 360;
    }

    switch (true) {

        // América do Norte
        case lat >= 24 && lat <= 83 &&
             lon >= -172 && lon <= -52:
            return "North America";

        // México e América Central
        case lat >= 7 && lat < 24 &&
             lon >= -118 && lon <= -77:
            return "Mexico and Central America";

        // América do Sul
        case lat >= -56 && lat <= 13 &&
             lon >= -82 && lon <= -34:
            return "South America";

        // Europa
        case lat >= 35 && lat <= 71 &&
             lon >= -25 && lon <= 45:
            return "Europe";

        // África
        case lat >= -35 && lat <= 37 &&
             lon >= -17 && lon <= 52:
            return "Africa";

        // Ásia
        case lat >= 5 && lat <= 80 &&
             lon >= 45 && lon <= 180:
            return "Asia";

        // Oceania
        case lat >= -50 && lat <= 0 &&
             lon >= 110 && lon <= 180:
            return "Oceania";

        default:
            return "Not mapped";
    }
}