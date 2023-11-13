// Pide una nota (número). Muestra la calificación según la nota:

// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

// pedir al usuario la nota
let resultadoExamen = prompt("Dime la nota obtenida")

mostrarTextoNota(resultadoExamen)

function mostrarTextoNota(nota) {
    let mensaje = "La nota obtenida es "
    if (nota < 0 || nota > 10) {
        alert( "Nota inválida")
    } else if (nota < 3) {
        alert( mensaje += "muy deficiente")
    } else if (nota < 5) {
        alert( mensaje += "insuficiente")
    } else if (nota < 6) {
        alert( mensaje += "suficiente")
    } else if (nota < 7) {
        alert( mensaje += "bien")
    } else if (nota < 9) {
        alert( mensaje += "notable")
    } else if (nota <= 10) {
        alert( mensaje += "sobresaliente")
    } 
}

