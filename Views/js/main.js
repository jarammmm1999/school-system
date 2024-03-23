var botonValidation = document.getElementById("btn-login");
botonValidation.textContent = "Acceder";

botonValidation.addEventListener("click", function() {
    botonValidation.textContent = "Validando Información..";
    setTimeout(function() {
        botonValidation.textContent =  "Acceder";
    }, 6000); // 3000 milisegundos = 3 segundos
});