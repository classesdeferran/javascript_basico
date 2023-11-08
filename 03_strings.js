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

// nombre = nombre[0].toUpperCase() + nombre.toLowerCase()

// charAt obtiene el caracter en la posición indicada
console.log(nombre.charAt(2));
console.log(nombre[2]);
//  slice corta desde la posición indicada 
console.log(nombre.slice(0));

console.log(nombre.charAt(0).toUpperCase());
console.log(nombre.slice(1).toLowerCase());

console.log(nombre.charAt(0).toUpperCase()+nombre.slice(1).toLowerCase());

let nombre_completo = "    Pérez González, María    "
let nombre_sin_espacios = nombre_completo.trim()
console.log(nombre_sin_espacios);

let nombre_arreglado = nombre_sin_espacios.split(", ")

nombre_arreglado = nombre_arreglado[1]+" "+nombre_arreglado[0]
console.log((nombre_arreglado));

let fecha = "2023/11/8"
// Hoy es 8 del 11 de 2023
let array_fecha = fecha.split("/")
console.log(array_fecha);
console.log(`Hoy es ${array_fecha[2]} del ${array_fecha[1]} de ${array_fecha[0]}`);