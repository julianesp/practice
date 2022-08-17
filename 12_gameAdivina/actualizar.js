var presionar = document.getElementById('boton')

function update(params) {
    if (presionar.onclick) {
        location.reload()  
    }
}

if (update.apply) {
    console.log('ejecutando');          
}
// update()



// solamente se ejecuta esta funcion si presiona este boton