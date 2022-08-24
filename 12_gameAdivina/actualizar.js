var boton = 1
var presionar = document.getElementById('boton')
var conteo = document.getElementById('conteo')

function update(params) {
    // if (presionar.onclick) {
    //     location.reload()  
    // }

    if (presionar.onclick) {
        console.log(`Actualizar se ha presionado ${boton} veces`)
        setTimeout(() => {
            location.reload()            
        }, 3000);
        boton++
    }
}

if (update.apply) {
    console.log('ejecutando');          
}
// update()



// solamente se ejecuta esta funcion si presiona este boton

// variable global to registrar pulsaciones al boton


function pulsacion(params) {
    // si el boton de actualizar es presionado, registrame esa pulsacion
    if (presionar.onclick) {
        alert(`Actualizar se ha presionado ${boton} veces`)
        boton++
    }
}

