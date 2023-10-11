let cantidadDeGatos = window.prompt("Mensaje de entrada");
let contadorA = 1;
let emoji;

for (let i = 1; i <= cantidadDeGatos; i++) {

    switch (contadorA) {
        case 1:
            emoji = "😺";
            contadorA++;
            break;
        case 2:
            emoji = "😸";
            contadorA++;
            break;
        case 3:
            emoji = "😹";
            contadorA=1;
            break;
    }

    // window.document.write("<p>Gato #" + i +":"+ emoji +"</p>");
    console.log("Gato #" + i + ": " + emoji);
}