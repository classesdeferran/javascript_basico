// BUCLE FOR "CLÁSICO"

let array_frutas = ["mango", "pera", "cereza", 'platano', "castaña"]
let array_frutas_may = []

for (let i=0; i<array_frutas.length; i++ ) {
    // console.log(array_frutas[i]);
    let fruta_corr = array_frutas[i].charAt(0).toUpperCase()+array_frutas[i].slice(1).toLowerCase()
    // array_frutas_may[i]=fruta_corr
    array_frutas_may.push(fruta_corr)
}

console.log(array_frutas_may);