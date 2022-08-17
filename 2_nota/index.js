// swal('Puede que toque quitar las variables let')
//objeto que guarda estados
let state = {
    d : 'deficiente',
    i : 'insuficiente',
    s: 'suficiente',
    b : 'bien',
    n : 'notable',
    e : 'excelente'
}

function calcular() {
    //variable para tomar la nota
    let note = parseInt(document.getElementById("nota").value)
    let saveNote = note

    //condicionales
    if (saveNote <= 3) {
        swal(`Tu dedicación al estudio es ${state.d}`)
    }
    if (saveNote > 3 && saveNote <= 5) {
        swal(`Tu dedicación al estudio es ${state.i}`)
    }
    if (saveNote >= 5 && saveNote <=6) {
        swal(`Tu dedicación al estudio es ${state.s}`)
    }
    if (saveNote >= 6 && saveNote <=7) {
        swal(`Tu dedicación al estudio es ${state.b}`)
    }
    if (saveNote >= 7 && saveNote <=9) {
        swal(`Tu dedicación al estudio es ${state.d}`)
    }
    if (saveNote >= 9 && saveNote <=10) {        
        swal(`Tu dedicación al estudio es ${state.e}`)
    }
    if (saveNote > 10) {
        swal(`Esta nota se sale del rango de calificación`) 
    }
    if (saveNote < 0) {
        swal(`Esta nota se sale del rango de calificación`) 
    }
}