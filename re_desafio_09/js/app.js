//let personaje = prompt("¿Quién se presenta hoy ? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
//console.log(personaje);//Muestro en la consola el personaje elegido

//let personaje = presentar();
let nombres = ["Mario", "Luigi", "Bowser", "Peach", "Yoshi", "Toad", "Toadette", "Daisy"];
let nombreamostrar = "";
let modificadorspan = document.querySelector('span');//selecciono todo lo que tiene el elemento span
let personajeMinuscula = "";

const buttonPlay = document.getElementById("btn");
buttonPlay.onclick = presentar;

function presentar() {
    let personaje = prompt("¿Quién se presenta hoy ? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    console.log(personaje);
    if (personaje == nombres[0] || personaje == nombres[1] || personaje == nombres[5] || personaje == nombres[6]) {
        nombreamostrar = personaje;
    } else {
        switch (personaje) {
            case nombres[2]:
                nombreamostrar = "Bowser Morton Koopa";
                break;
            case nombres[3]:
                nombreamostrar = "Princesa Peach Toadstool";
                break;
            case nombres[4]:
                nombreamostrar = "T. Yoshisaur Munchakoopas";
                break;
            case nombres[7]:
                nombreamostrar = "Princesa Daisy";
                break;
            default:
                nombreamostrar = "(desconocido)";

        }
    }
    /*console.log(nombreamostrar);*/


    modificadorspan.innerHTML = nombreamostrar;//modifico el innet html que tiene el elemento span que obtuve en la linea 5



    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] == personaje) {
            personajeMinuscula = personaje.toLowerCase()// Guaro en una variable el nombre en minuscula si coincide con el array
            //console.log(personajeMinucula);
        }

    }

    /*
    let cajas = document.querySelectorAll("#cajas div");//Obtengo todos los div dentro del div con id "Cajas"
    console.log(cajas);*/


    //obtengo el elemento html div con  el id mario
    let id = document.getElementById(personajeMinuscula);

    //agrego el atributo title para que se presente el personaje ingresado
    id.setAttribute("title", "Presentado"); 
    buttonPlay.remove();
}

