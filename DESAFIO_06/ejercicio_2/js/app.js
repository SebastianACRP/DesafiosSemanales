let cantidadDeGatos = window.prompt("Ingresar cantidad de gatos");
let cantidadDePasos = window.prompt("Ingresar cantidad de pasos");
let cantidadDeEmojis = "";

while (cantidadDePasos >0) {
    cantidadDeEmojis = "🐾" + cantidadDeEmojis;
    cantidadDePasos--;
}

for (let i = 1; i <= cantidadDeGatos; i++) {

    // document.write("<p>Gato #" + i + ": 🐈" + cantidadDeEmojis + "</p>");
    console.log("Gato #" + i + ": 🐈" + cantidadDeEmojis);
}

