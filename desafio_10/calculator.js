let resultado = document.getElementById("resultado");
let reset = document.getElementById("reset");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let igual = document.getElementById("igual");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cero = document.getElementById("cero");
let operandoa;
let operandob;
let operacion;

console.log(resultado.textContent);

function init() {
    uno.addEventListener('click', () => {
        resultado.textContent = resultado.textContent + "1";
    });

    dos.addEventListener('click', () => {
        resultado.textContent = resultado.textContent + "2";
    });

    tres.addEventListener('click', () => {
        resultado.textContent = resultado.textContent + "3";
    });

    cuatro.addEventListener('click', () => {
        resultado.textContent = resultado.textContent + "4";
    });

    cinco.addEventListener('click', () => {
        resultado.textContent = resultado.textContent + "5";
    });

    seis.addEventListener('click', () => {
        resultado.textContent = resultado.textContent + "6";
    });

    siete.addEventListener('click', () => {
        resultado.textContent = resultado.textContent + "7";
    });

    ocho.addEventListener('click', () => {
        resultado.textContent = resultado.textContent + "8";
    });

    nueve.addEventListener('click', () => {
        resultado.textContent = resultado.textContent + "9";
    });

    reset.addEventListener('click', () => {
        resetear();
    });

    suma.addEventListener('click', () => {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    });

    resta.addEventListener('click', () => {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    });

    multiplicacion.addEventListener('click', () => {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    });

    division.addEventListener('click', () => {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    });

    igual.addEventListener('click', () => {
        operandob = resultado.textContent;
        resolver();
    });
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
    
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}

init();
