
let dia_semana = "jueves"
let mensaje = ""

switch (dia_semana) {
    case "lunes" :
        mensaje = "Hoy es laborable"
        break
    case "martes" :
        mensaje = "Hoy es laborable"
        break
    case "miercoles" :
        mensaje = "Hoy es laborable"
        break
    case "jueves" :
        mensaje = "Hoy es laborable"
        break
    case "viernes" :
        mensaje = "Hoy es laborable"
        break
    default :
        mensaje = "Hoy es no laborable"    
}

switch (dia_semana) {
    case "lunes" :
    case "martes" :        
    case "miercoles" :
    case "jueves" :
    case "viernes" :
        mensaje = "Hoy es laborable"
        break
    default :
        mensaje = "Hoy es no laborable"    
}

console.log(mensaje);


