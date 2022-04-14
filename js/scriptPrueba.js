//JS
var saludo = "Hola mundo JavaScript";

document.getElementById("demo").innerHTML = saludo;
//alert(saludo);
//console.log(saludo);


function sumar(a, b) {
    var total = 0;
    total = a + b;
    alert(total);
}

function sumarDosNumeros() {
    var nombre = document.getElementById("nombre").value;
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var total = num1 + num2;
    document.getElementById("resultado").innerHTML = total;

    if (nombre.length == 0) {
        //alert("El nombre no debe estar vacío");
        document.getElementById("errorNombre").innerHTML = "El nombre no debe estar vacío";
    }
}

//Jquery
$(document).ready(function () {
    alert("Load ok...")
    $("#sumarJQ").click(function () {
        var num1 = parseInt($("#num1").val());
        var num2 = parseInt($("#num2").val());
        var total = num1 + num2;
        $("#resultado").html(total);
    });

    $("#saludo1").click(function () {
        $("#saludo2").hide();
        $("#saludo2").fadeOut();

    });

});

