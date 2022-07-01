function operacion_escogida() {
    document.getElementById('operaciones')

    if (sumar.call) {
        sumar()
    }
}



function sumar() {
    /**
     *se debe cambiar de tipo de dato con parseInt
     y agregar el método value para que no arroje
     error NaN o no es un número
     */
    var n1 = parseInt(document.getElementById("num1").value)
    var v1 = n1

    var n2 = parseInt(document.getElementById("num2").value)
    var v2 = n2

    var res = v1 + v2
    swal("La suma es de " + v1 + " + " + v2 + " es: " + res)

    if ((v1 && v2).valueOf == null) {
        swal("vacio")

    }

    // alert(v1 + v2)


    //si da clic en sumar, que ejecute el siguiente code

    //condicional para cuando la suma es mayor a mil
    /*
        if (res > 100) {
            swal("El resultado de la suma es mayor a 100");
        } else {
            swal("La suma es " + res);
        }
    */

}

function restar() {
    var n1 = parseInt(document.getElementById("num1").value)
    var v1 = n1

    var n2 = parseInt(document.getElementById("num2").value)
    var v2 = n2

    var res = v1 - v2
    swal("La resta de " + v1 + " - " + v2 + " es: " + res)
}

function multiplicar() {
    var n1 = parseInt(document.getElementById("num1").value)
    var v1 = n1

    var n2 = parseInt(document.getElementById("num2").value)
    var v2 = n2

    var res = v1 * v2
    swal("La multiplicación de " + v1 + " x " + v2 + " es: " + res)
}

function dividir() {
    var n1 = parseInt(document.getElementById("num1").value)
    var v1 = n1

    var n2 = parseInt(document.getElementById("num2").value)
    var v2 = n2

    var res = v1 / v2
    swal("La división de " + v1 + " / " + v2 + " es: " + res)

    if (v2 == 0) {
        swal('No se puede dividir entre 0')
    }
}