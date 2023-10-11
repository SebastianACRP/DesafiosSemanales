let cantidadDeGatos = window.prompt("Ingresar cantidad de gatos");
let cantidadDePasos = window.prompt("Ingresar cantidad de pasos");
let emojiPasos = "🐾";
let cantidadDeEmojis = "";

while (cantidadDePasos > 0) {
    cantidadDeEmojis = emojiPasos + cantidadDeEmojis
    cantidadDePasos--;
}

for (let i = 1; i <= cantidadDeGatos; i++) {

    if (i % 2 === 0) {
        console.log("Gato #" + i + ": 🐈🐈" + cantidadDeEmojis)
    } else
    // document.write("<p>Gato #" + i + ": 🐈" + cantidadDeEmojis + "</p>");
    console.log("Gato #" + i + ": 🐈" + cantidadDeEmojis);
}