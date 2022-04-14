(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$(document).ready(function() {
    $("#btnLogin").click(function() {
        var Usuario = $("#rutLogin").val();
        var Contraseña = $("#ContrasenaLogin").val();
        var res;
        if (Usuario == "200822110" && Contraseña == "pass") {
            res = "Inicio de sesion valido"
        } else {

            res = "Usuario/Contraseña incorrecto"
        }
        alert(res)
    });

});