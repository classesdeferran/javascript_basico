// IMPORTTANTE
// JS es sensible a las mayúsculas y minúsculas
// las palabras reservadas siempre van en minúsculas

// VARIABLES

// La palabra reservada let crea una variable
// con el signo = le damos un valor
let nombre = "Anna"
// let nombre = "Ramon" // esto no se puede hacer con let
let NOMBRE = "Anna"

let color // crear la variable
color = "verde" // asignar el valor

let uno, dos, tres
uno = 1
dos = 2

// También existe la posibilidad de crear
// una variable con la palabra var
var ciudad = "Cornellà"
var ciudad = "Esplugues"

let comida = "pizza, pan "

// for nos permite iterar (pasar de un valor a otro)
for (let i = 0; i < comida.length; i++) {
    console.log(comida[i]);
}

let texto = "soy un texto" // tipo String
let entero = 1 // tipo Number
let decimal = 1.0 // tipo Number
let booleano = true // tipo Boolean

entero += 2 // una variable se incrementa a sí misma
console.log(entero);

texto += " y hoy es viernes"
console.log(texto);

// VENTANS EMERGENTES
// hay tres tipos
// alert(mensaje de tipo string)
// let confirmacion = confirm(mensaje) // Devuelve true o false
// let pregunta = prompt(mensaje) // permite recibir una respuesta

// ESTRUCTURAS DE CONTROL
// if

let frio = false
if (frio) {
    console.log("Hace frio");
} else {
    console.log("No hace frio");
}

let dia = "martes"
if (dia == "lunes"){
    console.log("Hoy es lunes");
} else if (dia == "martes") {
    console.log("Hoy es martes");
} else {
    console.log("Hoy no es ni lunes ni martes");
}

let prueba1 = "a"; let prueba2 = "b"

let tiempo = "llueve"
let contador = 0
while (contador < tiempo.length) {
    console.log("llueve");
    contador++
}

let contador2 = 1
while (true) {
    console.log("llueve");
    if (contador2 ==5){
        break
    }
    contador2++
}





