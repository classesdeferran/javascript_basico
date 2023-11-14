// ¿ES UN PALÍNDROMO?
// Queremos saber si un texto es el inverso de otro
// Hay que quitar los espacios, las comas, 
// los puntos, los dos puntos y los puntos y coma

// importar la función del otro fichero
import {revertirTexto} from "./tu_ejer_04.js"

// let texto = "Hola ,;:.?¿que tal??????"
let texto = "dabalearrozalazorraelabad"
texto = "Annad"

// Eliminar caracteres indeseados
let newText = texto
                .replaceAll(" ", "")
                .replaceAll(",", "")
                .replaceAll(";", "")
                .replaceAll(":", "")
                .replaceAll(".", "")
                .replaceAll("?", "")
                .replaceAll("¿", "")

// console.log(newText);

// function revertirTexto(texto) {
//     let tamanyoTexto = texto.length
//     let nuevoTexto = ""
//     for (let i = tamanyoTexto-1; i >= 0; i--) {
//         nuevoTexto += texto[i].toLowerCase()
//     }
//     return nuevoTexto
//     console.log(tamanyoTexto);
// }


if (newText.toLowerCase() == revertirTexto(texto)) {
    console.log("Sí es un palíndromo");
} else {
    console.log("No es un palíndromo");
}

