// Dado estos arrays:
let arrayNombres1 = ["José María", "Francisco", "Luís", "Mónica", "María José", "Nicolás", "Ricardo", "Sara", "Anna", "Pol"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]
let arrayNombres3 = ['Cecilia', 'Laura', 'Claudia']

// 5) Encontrar el elemento con el texto más largo y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.

function encontrarNombreMasLargo( arrayNombres) {
    // Variables auxiliares
    let varTextoMasLargo = arrayNombres[0]
    let arrayTextosMasLargos = []

    for (let i = 1; i < arrayNombres.length; i++) {
        if (varTextoMasLargo.length < arrayNombres[i].length) {
            varTextoMasLargo = arrayNombres[i]
        }
    }

    for (let i = 0; i < arrayNombres.length; i++) {
        if (arrayNombres[i].length == varTextoMasLargo.length) {
            arrayTextosMasLargos.push(arrayNombres[i])
        }
    }

    if (arrayTextosMasLargos.length > 1) {
         return (`Los nombres más largos son: ${arrayTextosMasLargos.toString()}`);
    } else {
        return (`El nombre más largo es ${varTextoMasLargo}`);
    }

}

console.log(encontrarNombreMasLargo(arrayNombres1));
console.log(encontrarNombreMasLargo(arrayNombres2));
console.log(encontrarNombreMasLargo(arrayNombres3));


// console.log(arrayTextosMasLargos);


// console.log(`El nombre más largo es --> ${varTextoMasLargo}`);