let listaAlumnos = ["Peter", "Mary", "Clark"]

// Necesito guardar información del:
        // nombre
        // apellido
        // edad
        // ciudad
        // es_alumno_ahora

listaAlumnosApellido = ["Parker", "Jane", "Kent"]

let alumno1 = {nombre: "Peter", apellido: "Parker", edad: 25, ciudad: 'NY', es_alumno: true}

console.log(typeof objetoAlumno)

let alumno2 = new Object()
alumno2.nombre = "Mary"
alumno2["apellido"] = "Jane"
alumno2.nombreCompleto = function () {
    return this.nombre + " " + this.apellido
}


console.log(alumno2);

console.log(alumno1.edad);

console.log(`alumno2 es : ${alumno2.nombre} ${alumno2.apellido}`);
console.log(`alumno es ${alumno2.nombreCompleto()}`);
