/* IF 
   IF / ELSE 
   IF / ELSE IF / ELSE
*/

let llueve = false
let loQueVoyAHacer = ""
if (llueve) {
   loQueVoyAHacer = "Necesito un paraguas";
} else {
   loQueVoyAHacer = "Me voy de paseo";
}

// document.getElementById("js_1").innerText = loQueVoyAHacer

let dia_semana = "viernes"
let mensaje = ""

if (dia_semana == "lunes") {
   mensaje = `Hoy es ${dia_semana}`
} else if (dia_semana == "martes") {
   mensaje = `Hoy es ${dia_semana}`
} else {
   mensaje = "Hoy no es ni lunes ni martes"
}


document.getElementById("js_1").innerText = mensaje