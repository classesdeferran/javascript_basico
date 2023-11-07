
let edat = prompt("¿Cuantos años tienes?")
let mensaje = ""

if (edat < 18) {
    mensaje = `Como tienes ${edat} años\neres menor de edad`
} else {
    mensaje = `Como tienes ${edat} años\neres mayor de edad`
}

alert(mensaje)