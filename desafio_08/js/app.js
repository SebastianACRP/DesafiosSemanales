let idstyle = 1;

function cambioestilos() {
    let estilos = ["./css/estilos.css", "./css/estilos-retro.css", "./css/estilos-futuro.css"]
    let css = document.getElementById("idstyle");
    css.setAttribute("href", estilos[idstyle]);

    if (idstyle == 2) {
        idstyle = 0;
    } else {
        idstyle++;
    }
}