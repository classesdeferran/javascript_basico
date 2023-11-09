// JUEGO PIEDRA-PAPEL-TIJERAS v1
// Lógica de la partida


let menu = `
OPCIONES DEL JUEGO
==================
Elige el número correspondiente a 
la jugada que prefieres

1 - Piedra
2 - Papel
3 - Tijeras

`

let nombre_jugador = "Asimov"
let jugada_humano = 1

if (jugada_humano == 1) {
    console.log(`Piedra <-- La jugada de ${nombre_jugador}`);
} else if (jugada_humano == 2 ) {
    console.log(`Piedra <-- La jugada de ${nombre_jugador}`);
} else {
    console.log(`Tijeras <-- La jugada de ${nombre_jugador}`);
}

// Jugada del PC
let jugada_PC = getRandomInt(1, 4)
if (jugada_PC == 1) {
    console.log(`Piedra <-- La jugada del PC`);
} else if (jugada_PC == 2) {
    console.log(`Papel <-- La jugada del PC`);
} else {
    console.log(`Tijeras <-- La jugada del PC`);
}

// Partida
if (jugada_humano == jugada_PC) {
    console.log(`¡Habéis empatado!`);
} else if ((jugada_humano==1 && jugada_PC==3) 
            || (jugada_humano==2 && jugada_PC==1) 
            || (jugada_humano==3 && jugada_PC==2)) {
    console.log(`¡Has ganado ${nombre_jugador}!`);
} else {
    console.log(`¡Has perdido ${nombre_jugador}!`);
}



// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


  