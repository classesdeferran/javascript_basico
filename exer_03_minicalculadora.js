// CREAR UNA CALCULADORA
// ** va a pedir al usuario que indique
//      dos números y la operación que desea hacer
// ** operaciones posibles:
//      suma, resta, multiplicación y división


// calculadora(num1, operacion, num2)

console.log(calculadora(1, "+", 4)); // 5
console.log(calculadora(1, "-", 4)); // 5
console.log(calculadora(1, "*", 4)); // 5
console.log(calculadora(1, "/", 4)); // 5
console.log(calculadora(1, "/", 0)); // 5
console.log(calculadora(1, "%", 4)); // 5


// función principal que organiza las
// funciones con las operaciones
function calculadora(num1, operacion, num2){
    
    switch (operacion) {

        case "+":
            return suma(num1, num2)
        case "-":
            return resta(num1, num2)
        case "*":
            return multiplicacion(num1, num2)
        case "/":
            return division(num1, num2)
        case "%":
            return num1 % num2
        default:
            return "Operación no identificada"
          
    }

}


// funciones con las operaciones específicas
function suma(num1, num2){
    return num1 + num2
}
function resta(num1, num2){
    return num1 - num2
}
function multiplicacion(num1, num2){
    return num1 * num2
}
function division(num1, num2){
    if (num2 == 0) {
        return "No se puede dividir por cero"
    }
    return num1 / num2
}
