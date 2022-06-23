/**
 * Cuando da clic sobre este botón, esa
 * palabra se va a guardar en un array
 * que será llamado desde la función
 * concatString() para juntarla con las
 * demás palabras
 */
function save(frase) {
    //lo que se ingresa en el input se guarda en esa variable

    let guardar = document.getElementById('save')

    if (save == ) {

    }
}

function concatString() {

    palabras = save()
    swap(palabras)
}

//codigo copiado

//variable para juntar las cadenas
let cadenasJuntas = ""

//bucle do-while para introducir varias cadenas
do {
    //se pide la cadena por el teclado
    // var texto = document.getElementById('words')
    var cadena = prompt('Ingresa la cadena')

    //si cadenasJuntas está vacía
    if (cadenasJuntas == null) {
        cadenasJuntas = cadenasJuntas + cadena
    } else {
        //se une la cadena con la que ingresa
        cadenasJuntas = cadenasJuntas + "-" + cadena
    }
} while (confirm('Desea seguir?'));

document.write(cadenasJuntas)