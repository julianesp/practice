function edad() {   
    var year = parseInt(document.getElementById("anios").value)
    var age = year

    if (age >= 18) {
        swal("Ya puedes conducir")
    } else if (age < 18) {
        swal("Te faltan " + (18 - age) + " años para poder conducir")
    } 
}