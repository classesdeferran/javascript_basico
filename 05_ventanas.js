// VENTANAS INTERACTIVAS

// Aviso
alert("Soy un alert !!")

// Confirmación
let respuesta = confirm("¿Estás de acuerdo?")
let codigo = "<p style='color:red'>" + respuesta  + "</p>"
document.getElementById("ventana").innerHTML = codigo

let nombre = prompt("¿Cómo te llamas?")
alert(`Te llamas ${nombre}`)