document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    let longitude = document.querySelector("#long");
    let latitude = document.querySelector("#lati");
    
    if (navigator.geolocation) { // Se o navegador suportar a geolocalização
        navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao);
    } else {
        console.log("Geolocalização não suportada!");
    }

    function mostrarLocalizacao (posicao) {
        longitude.innerHTML = `Longitude: ${posicao.coords.longitude}`;
        latitude.innerHTML = `Latitude: ${posicao.coords.latitude}`;
    };
    
    function erroLocalizacao () {
        console.log("Erro ao obter localização!");
    };
})