// ¿Cuantas veces aparece un caracter en un texto?

// A partir de un texto y un caracter quiero saber
// cuantas veces aparece este caracter, 
// sin distinguir mayúsculas de minúsculas

let texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar tortor nec leo convallis, quis ultricies nibh mollis. Quisque lacus enim, posuere in venenatis eu, cursus et ante. Quisque vitae ante congue, vestibulum felis non, dignissim nisi. In id est augue. Fusce tempor lacinia eros ut tempus. Nulla enim nisi, vehicula non velit non, lobortis pretium ex. Curabitur accumsan pharetra ligula non aliquet. In dapibus nunc sed metus sollicitudin, vitae ultricies tortor semper. Morbi efficitur vehicula venenatis. Vivamus malesuada, ligula ac posuere mattis, dui sapien imperdiet ex, ac laoreet justo dolor a mi. Donec sit amet dolor in justo faucibus porttitor. Quisque volutpat fermentum tellus, quis posuere ligula aliquam sit amet. Aenean nibh odio, pretium ut mi ac, porttitor pretium ipsum. Curabitur imperdiet orci ut erat tincidunt ultrices. Morbi mattis arcu a tellus tristique, nec pulvinar neque tincidunt. Curabitur eu nisl vitae enim interdum finibus eget eu elit.
Vivamus blandit euismod lorem, vitae lobortis nibh cursus eu.Maecenas dapibus lorem egestas pretium dictum.Sed vel sapien felis.Vestibulum suscipit eros eu sapien consectetur, sed faucibus neque tincidunt.Aliquam pretium accumsan libero, suscipit sagittis velit.Vestibulum sed tempor sem, et tincidunt sapien.Cras non facilisis lacus, sit amet accumsan nulla.Curabitur ut justo eu justo iaculis volutpat.Maecenas tempor tortor eget congue molestie.`
let caracter = "i"

let contador = 0
for (let i = 0; i < texto.length; i++) {
    console.log(texto[i].toLowerCase());
    if (texto[i].toLowerCase() == caracter) {
        contador++
    }
}

console.log(`La letra ${caracter} aparece ${contador} veces`);


