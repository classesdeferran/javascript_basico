// Preguntar la edad
let edad = prompt("¿Cúal es tu edad?")
// alert(typeof edad)

if ((edad == null) || (edad == ""|| isNaN(edad))) {
    alert("Debes escribir tu edad correctamente")
} else if (edad < 18) {
        alert(`Tienes ${edad} años\ny eres menor de edad`)
    } else {
        alert(`Tienes ${edad} años 
    y eres mayor de edad`)
    }


