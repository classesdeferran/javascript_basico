// STRINGS = cadena de texto

let ejemplo1 = "Hola"
let ejemplo2 = 'Hola'
let ejemplo3 = `Hola` // aportación del 2014

let frase1 = 'Ella me dijo "¡Hola!"'
console.log(frase1);

let nombre = "sara"
let frase2 = `${nombre.toUpperCase()} me dijo "hola"`
console.log(frase2);

// Forma antigua de crear una frase
let saludo1 = "buenos"
let saludo2 = "días"
let saludoFinal = saludo1 + ' ' + saludo2 // + <-- concatena, une
let saludo_final = saludo1 + saludo2
console.log(saludoFinal);

console.log("el texto tiene", nombre.length, 'caracteres');
console.log(`el texto tiene ${nombre.length} caracteres`);

nombre = "bill"
console.log(nombre[0]);

nombre = "feDeriCO"
nombre = nombre[0].toUpperCase() + nombre.toLowerCase()

console.log(nombre);