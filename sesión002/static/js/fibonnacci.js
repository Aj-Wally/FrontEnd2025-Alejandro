let ultimo = 1;
let penultimo = 1;
let fibonnacci = [0, 1, 1];

function cambiarParagraph(contenido = "Fibonnacci: 0, 1, 1") {
    document.getElementById("fibonnacciResultado").innerHTML = contenido;
}

function pintarEnPantalla() {
    cambiarParagraph("Fibonnacci: " + fibonnacci.join(", "));
}

function fibonnacciSiguiente() {
    // determinar el siguiente numero, y añadirlo al paragraph de los resultados de fibonacci
    siguienteNumero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = siguienteNumero;
    
    fibonnacci.push(siguienteNumero);
    pintarEnPantalla();
}

function fibonnacciSiguienteN(n = 10) {
    // iterar sobre la funcion siguiente
    for (let i = 0; i < n; i++) {
        fibonnacciSiguiente();
    }
}

function fibonnacciLimpiar() {
    // reiniciar las variables iniciales y luego limpiar el paragraph
    ultimo = 1;
    penultimo = 1;
    fibonnacci = [0, 1, 1];
    cambiarParagraph();
}
