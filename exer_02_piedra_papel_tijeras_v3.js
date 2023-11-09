// JUEGO PIEDRA-PAPEL-TIJERAS v3
// Revisamos que no haya errores por partes del usuario

let nombre_jugador = ""
let nombre_incorrecto = true
do {
// preguntar al usuario su nombre
let mensaje_inicial =`
¡Vamos a jugar al Piedra-Papel-Tijeras!

Me llamo PC. ¿Y tu?
`
    nombre_jugador = prompt(mensaje_inicial)

if (nombre_jugador.trim().length > 0 && nombre_jugador != null) {
    console.log("Condición solucionada");
    nombre_incorrecto = false
}
// console.log("tecla :", nombre_jugador);
// if ( nombre_jugador.trim().length > 0 ) {
//     console.log("Condición solucionada");
//     nombre_incorrecto = false
// }

} while (nombre_incorrecto)

console.log(nombre_jugador);

let menu = `
OPCIONES DEL JUEGO
==================
${nombre_jugador} elige el número correspondiente
a la jugada que prefieres

1 - Piedra
2 - Papel
3 - Tijeras
`
// Ya tenemos la jugada del humano
let jugada_humano = parseInt(prompt(menu))
alert(typeof jugada_humano)
if (jugada_humano != 1 || jugada_humano != 2 || jugada_humano != 3 ) {
    alert("Partida finalizada. ¡Hasta pronto!")
} else {

let texto_resolucion_partida = ""

if (jugada_humano == 1) {
    texto_resolucion_partida += `Piedra <-- La jugada de ${nombre_jugador}\n`;
} else if (jugada_humano == 2 ) {
    texto_resolucion_partida += `Piedra <-- La jugada de ${nombre_jugador}\n`;
} else {
    texto_resolucion_partida +=(`Tijeras <-- La jugada de ${nombre_jugador}\n`);
}

// Jugada del PC
let jugada_PC = getRandomInt(1, 4)
if (jugada_PC == 1) {
    texto_resolucion_partida += `Piedra <-- La jugada del PC\n`;
} else if (jugada_PC == 2) {
    texto_resolucion_partida += `Papel <-- La jugada del PC\n`;
} else {
    texto_resolucion_partida +=`Tijeras <-- La jugada del PC\n`;
}

// Partida
if (jugada_humano == jugada_PC) {
    texto_resolucion_partida +=`¡Habéis empatado!\n`;
} else if ((jugada_humano==1 && jugada_PC==3) 
            || (jugada_humano==2 && jugada_PC==1) 
            || (jugada_humano==3 && jugada_PC==2)) {
    texto_resolucion_partida +=`¡Has ganado ${nombre_jugador}!\n`;
} else {
    texto_resolucion_partida +=`¡Has perdido ${nombre_jugador}!\n`;
}

alert(texto_resolucion_partida)





}
  


// Notesé que también en este caso `min` será incluido y `max` excluido

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }