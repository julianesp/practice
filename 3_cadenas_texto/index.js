//variable donde se guardarán los caracteres
var texto = ""

function save(params) {
    var palabras = document.getElementById('mostrarPalabras')

    do {
        var cadena = prompt('Ingresa tus notas por guardar')

        //si texto está vacío
        if (texto == "") {
            texto = texto + cadena
        }
        //si la variable texto no está vacía, la va a unir
        //con los anteriores caracteres ingresados separándolos con
        //dos barras
        else {
            texto = texto + ' || ' + cadena
        }
        /**
         * TODO ESTO SE CUMPLE SI LE DOY EN EL BOTÓN ACEPTAR
         */
    }
    //si pulsa en aceptar sigue la ejecución del programa
    while (confirm('Vas a seguir guardando más caracteres?'));
    //se pulsa en cancelar, se imprime lo que ha ingresado
    document.write(texto)
}

/**
 * Cuando se presione el boton cancelar, se sale del
 * ingreso de caracteres para luego mostrar lo que
 * tiene almacenado en el array vacío
 */
function cancelar() {
    setInterval(() => {}, 1500);
    swal('Presionaste el botón cancelar')
}