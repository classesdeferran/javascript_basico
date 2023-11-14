 // Crea una función que reciba 2 parámetros, precio e iva, 
//  y devuelva el precio con iva incluido. 
//  Si no recibe el iva, aplicará el 21 por ciento por defecto.


// ...iva es un operador llamado spread, el cual permite
// obtener múltiples parámetros dentro de una lista
function precioConIVA(precio, ...iva) {
    console.log(iva);
    if (iva.length == 0) {
        return precio * 1.21
    }
    return precio * (100 + iva[0]) / 100
}

console.log(precioConIVA(100, 4)); // 104
console.log(precioConIVA(100)); // 121