// CREAR UN PALÍNDROMO
// Un palíndromo es un texto que tiene sentido
// incluso si se escribe al revés.
// En este ejercicio nuestro objetivo será invertir un
// texto, como si se mirara en un espejo

// dabale arroz la zorra al abad

// abc -- cba

let texto = "dabalearrozalazorraelabad"
texto = "buenos dias"

export function revertirTexto(texto) {
    let tamanyoTexto = texto.length
    let nuevoTexto = ""
    for (let i = tamanyoTexto-1; i >= 0; i--) {
        nuevoTexto += texto[i].toLowerCase()
    }
    return nuevoTexto
    console.log(tamanyoTexto);
}

// console.log(revertirTexto(texto)); 

