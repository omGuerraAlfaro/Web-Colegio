/* validacion form */
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


function validarRegistro() {
    var password = document.getElementById("validationPass").value;
    var password2 = document.getElementById("validationPass2").value;
    if (password2 != password) {
        document.getElementById("resValPass2").innerHTML = "Las contraseñas deben ser iguales";
    }
}

function saltarA(id, tiempo) { //Funcion para ir a cualquier parte del sitio
    var tiempo = tiempo || 10; //Tiempo que tarda en reflejar la accion en ms; por defecto son 10ms
    console.log(tiempo)
    $("html, body").animate({ scrollTop: $(id).offset().top }, tiempo); //Se mueve hasta el inicio del id

  }


$(document).ready(function() {
    $("#btnLogin").click(function() {
        var Usuario = $("#rutLogin").val();
        var Contraseña = $("#ContrasenaLogin").val();
        var res;
        if (Usuario == "200822110" && Contraseña == "pass") {
            res = "Inicio de sesion valido"
            $("#resultadoLoginBien").html(res);
            $("#resultadoLoginMal").html("");
        } else {

            res = "Usuario/Contraseña incorrecto"
            $("#resultadoLoginMal").html(res);
            $("#resultadoLoginBien").html("");
        }
    });

    $("#ValidarPass").click(function() {
        var password = $("#validationPass").val();
        var password2 = $("#validationPass2").val();
        var res;
        if ((password2 == password) && (password2 != "")) {
            res = "Contraseña valida"
            $("#valPass").html(res);
            $("#valPass2").html("");
        } else {
            res = "Las contraseñas no son iguales"
            $("#valPass2").html(res);
            $("#valPass").html("");
        }
    });

    
});

