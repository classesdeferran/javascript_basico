// JUEGO PIEDRA-PAPEL-TIJERAS v2

// preguntar al usuario su nombre
let mensaje_inicial =`
¡Vamos a jugar al Piedra-Papel-Tijeras!

Me llamo PC. ¿Y tu?
`
let nombre_jugador = prompt(mensaje_inicial)

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
let jugada_humano = prompt(menu)

// aclaración de como añadir texto a un string
// let string1 = "A" + "B" + "C"
// let string2 = ""
// console.log("Inicialmente string2 vale", string2);
// string2 += "A"
// console.log(string2);
// string2 += "B"
// console.log(string2);
// string2 += "C"
// console.log(string2);


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



// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


  