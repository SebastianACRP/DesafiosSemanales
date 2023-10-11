/*Ejercicio 1*/
let title = document.querySelector("title");
console.log(title.innerHTML);

//ejercicio 3
let nombrecompleto1 = document.querySelectorAll(".integrante1");
let nombrecompleto2 = document.querySelectorAll(".integrante2");
let nombreintegrante1 = "";
let nombreintegrante2 = "";
let totalarray = nombrecompleto1.length;
let totalarray2 = nombrecompleto2.length;

for (let i = 0; i < totalarray; i++) {
    if (nombrecompleto1[i].innerHTML != "") {
        if (i == 2,  i == 3) {
            nombreintegrante1 += nombrecompleto1[i].innerHTML.toUpperCase() + " ";
        } else { nombreintegrante1 += nombrecompleto1[i].innerHTML + " "; }
    }

}

for (let i = 0; i < totalarray2; i++) {
    if (nombrecompleto2[i].innerHTML != "") {
        if (i == 2,  i == 3) {
            nombreintegrante2 += nombrecompleto2[i].innerHTML.toUpperCase() + " ";
        } else { nombreintegrante2 += nombrecompleto2[i].innerHTML + " "; }
    }

}

console.log("-----" + "\nIntegrante 1: " + "\"" + nombreintegrante1.trim() + "\"" + "\nIntegrante 2: " + "\"" + nombreintegrante2.trim() + "\"" + "\n----- ");

//    ejercicio 4


/*let coincidencianombre = nombrecompleto1[0].innerHTML == nombrecompleto2[0].innerHTML ||
nombrecompleto1[0].innerHTML == nombrecompleto2[1].innerHTML ||
nombrecompleto1[1].innerHTML == nombrecompleto2[0].innerHTML*/

let coincidencianombre = false;
let coincidencianombrearray1 = nombrecompleto1[0].innerHTML == nombrecompleto2[0].innerHTML;
let coincidencianombrearray2 = nombrecompleto1[0].innerHTML == nombrecompleto2[1].innerHTML;
let coincidencianombrearray3 = nombrecompleto1[1].innerHTML == nombrecompleto2[0].innerHTML;
let coincidencianombrearray4 = nombrecompleto1[1].innerHTML == nombrecompleto2[1].innerHTML;
let coincidencianombrearray5 = nombrecompleto1[2].innerHTML == nombrecompleto2[2].innerHTML;
let coincidencianombrearray6 = nombrecompleto1[2].innerHTML == nombrecompleto2[3].innerHTML;
let coincidencianombrearray7 = nombrecompleto1[3].innerHTML == nombrecompleto2[2].innerHTML;
let coincidencianombrearray8 = nombrecompleto1[3].innerHTML == nombrecompleto2[3].innerHTML;
let nombreprimero = "";
let nombresegundo = "";
varcharcoincidencia = "Hubo coincidencias en algun nombre de los integrantes, elige un color para destacar el nombre coincidente";
varcharcoincidencia2 = "Hubo coincidencias en algun apellido de los integrantes, elige un color para destacar el apellido coincidente";


if (coincidencianombrearray1) {
    console.log("Hubo coincidencias en algun nombre de los integrantes");
    let elegircolor = prompt(varcharcoincidencia);
    nombreprimero = "i1n1";
    nombresegundo = "i2n1";
    let nombresDuplicados = document.getElementById(nombreprimero);
    let nombresDuplicados2 = document.getElementById(nombresegundo);
    nombresDuplicados.style.color = elegircolor;
    nombresDuplicados2.style.color = elegircolor;
} if (coincidencianombrearray2) {
    console.log("Hubo coincidencias en algun nombre de los integrantes");
    let elegircolor = prompt(varcharcoincidencia);
    nombreprimero = "i1n1";
    nombresegundo = "i2n2";
    let nombresDuplicados = document.getElementById(nombreprimero);
    let nombresDuplicados2 = document.getElementById(nombresegundo);
    nombresDuplicados.style.color = elegircolor;
    nombresDuplicados2.style.color = elegircolor;
} if (coincidencianombrearray3) {
    console.log("Hubo coincidencias en algun nombre de los integrantes");
    let elegircolor = prompt(varcharcoincidencia);
    nombreprimero = "i1n2";
    nombresegundo = "i2n1";
    let nombresDuplicados = document.getElementById(nombreprimero);
    let nombresDuplicados2 = document.getElementById(nombresegundo);
    nombresDuplicados.style.color = elegircolor;
    nombresDuplicados2.style.color = elegircolor;
} if (coincidencianombrearray4) {
    console.log("Hubo coincidencias en algun nombre de los integrantes");
    let elegircolor = prompt(varcharcoincidencia);
    nombreprimero = "i1n2";
    nombresegundo = "i2n2";
    let nombresDuplicados = document.getElementById(nombreprimero);
    let nombresDuplicados2 = document.getElementById(nombresegundo);
    nombresDuplicados.style.color = elegircolor;
    nombresDuplicados2.style.color = elegircolor;

} else {
    console.log("No hubo coincidencias en ningun nombre");

}

let comparaapellido = confirm("¿Desea comparar los apellidos?");

if (comparaapellido) {
    if (coincidencianombrearray5) {
        console.log("Hubo coincidencias en algun apellido de los integrantes");
        let elegircolor = prompt(varcharcoincidencia2);
        nombreprimero = "i1a1";
        nombresegundo = "i2a1";
        let nombresDuplicados = document.getElementById(nombreprimero);
        let nombresDuplicados2 = document.getElementById(nombresegundo);
        nombresDuplicados.style.color = elegircolor;
        nombresDuplicados2.style.color = elegircolor;
    }
} if (coincidencianombrearray6) {
    console.log("Hubo coincidencias en algun apellido de los integrantes");
    let elegircolor = prompt(varcharcoincidencia2);
    nombreprimero = "i1a1";
    nombresegundo = "i2a2";
    let nombresDuplicados = document.getElementById(nombreprimero);
    let nombresDuplicados2 = document.getElementById(nombresegundo);
    nombresDuplicados.style.color = elegircolor;
    nombresDuplicados2.style.color = elegircolor;
} if (coincidencianombrearray7) {
    console.log("Hubo coincidencias en algun apellido de los integrantes");
    let elegircolor = prompt(varcharcoincidencia2);
    nombreprimero = "i1a2";
    nombresegundo = "i2a1";
    let nombresDuplicados = document.getElementById(nombreprimero);
    let nombresDuplicados2 = document.getElementById(nombresegundo);
    nombresDuplicados.style.color = elegircolor;
    nombresDuplicados2.style.color = elegircolor;
} if (coincidencianombrearray8) {
    console.log("Hubo coincidencias en algun apellido de los integrantes");
    let elegircolor = prompt(varcharcoincidencia2);
    nombreprimero = "i1a2";
    nombresegundo = "i2a2";
    let nombresDuplicados = document.getElementById(nombreprimero);
    let nombresDuplicados2 = document.getElementById(nombresegundo);
    nombresDuplicados.style.color = elegircolor;
    nombresDuplicados2.style.color = elegircolor;
} else {
    console.log("No hubo coincidencias en ningun apellido");

}