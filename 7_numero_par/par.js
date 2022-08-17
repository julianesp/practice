function calcular(params) {
    var numeroIngresado = parseInt(document.getElementById('n1').value);

    var numeroCaptado = numeroIngresado

    //el modulo debe ser cero

    //es par si al dividir entre cero su residuo tambien es cero

    /* Cuando se coloca % entre dos números, el computador dividirá el primer número por el segundo, y luego dará como resultado el residuo de esa división */

    if ((numeroCaptado % 2) == 0) {
        swal('El número es par')
    } else {
        swal('El número es impar')
    }

}