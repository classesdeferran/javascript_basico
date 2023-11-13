// NÚMERO PRIMO
// Crea una función que diga si un número es primo o no
// Número primo es aquel que solo es divisible por si mismo y 1

let numero = prompt("Dime el número...")

alert(esPrimo(numero))

function esPrimo(numero) {
    if (numero < 2) {
        return "No es primo"
    }
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            return `el número ${numero} no es primo`
        }
    }
    return `el número ${numero} es primo`
}