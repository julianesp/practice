function calcular(params) {
    //llamando a las variables del HTML
    //pasar a números lo qye se ingresa
    var num1 = parseInt(document.getElementById('n1').value)
    var v1 = num1
    var num2 = parseInt(document.getElementById('n2').value)
    var v2 = num2
    var num3 = parseInt(document.getElementById('n3').value)
    var v3 = num3

    if (v1 > v2 && v1 > v3) {
        swal('El número mayor es el ' + v1)
    }
    if (v2 > v1 && v2 > v3) {
        swal('El número mayor es el ' + v2)
    }
    if (v3 > v1 && v3 > v2) {
        swal('El número mayor es el ' + v3)
    }
}