// ARRAYS

let array_1 = ["Anna", "Sara", "John"]
// console.log(typeof array_1);
let nombre = "Pep"
console.log(nombre.length);
console.log(nombre[1]);
console.log(array_1.length);

let platano = "platano"
let array_frutas = ["mango", "pera", "cereza", platano, "castaña"]
console.log(array_frutas[3]);
console.log(array_frutas.length);
// Obtengo el útimo elemento del array
console.log(array_frutas[array_frutas.length-1]);
array_frutas[2] = "naranja"
console.log(array_frutas);

// push añade elementos al final del array
array_frutas.push("limones")
console.log(array_frutas);

// pop quita el útimo elemento
let ultima_fruta = array_frutas.pop()
console.log(ultima_fruta);
console.log(array_frutas);

// elimina el primero
let primera_fruta = array_frutas.shift()
console.log((primera_fruta));
console.log(array_frutas);

let array_frutas_fall = ["mango", "pera", "cereza", platano, "castaña"]
let array_frutas_sum = ["melocotón", "melón", "sandía"]


array_frutas_fall.push(array_frutas_sum)
console.log(array_frutas_fall);
let array_unificado = array_frutas_fall.flat()
console.log(array_unificado);



let array_frutas_final = array_frutas_fall.concat(array_frutas_sum)
console.log(array_frutas_final);