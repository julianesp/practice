// const word = prompt('Digite la palabra para adivinar')

// la palabra ya se guarda en esta variable

// si el user adivina, se mostrará la palabra
// console.log(`La palabra por adivinar es ${word}`);

console.log('registrar las veces que doy clic sobre el boton');

// arreglo de palabras para adivinar 
var words = ['casa','mueble','televisor']

// trayendo etiquetas de html
var letra = document.querySelector('input') 

function adivinar(params) {

    if (letra == words.values) {
        alert('Lo lograste')
    }
}
