var botonValidation = document.getElementById("btn-login");
botonValidation.textContent = "Acceder";

botonValidation.addEventListener("click", function() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
    botonValidation.textContent = "Validando Información..";
    setTimeout(function() {
        botonValidation.textContent =  "Acceder";
    }, 6000); // 3000 milisegundos = 3 segundos
});