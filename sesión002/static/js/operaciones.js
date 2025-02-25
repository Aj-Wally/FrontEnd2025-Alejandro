/*
 *
 *
 * @param { number } num1 sumando1 de la adicion
 * @param { number } num2 sumando2 de la adicion
 */


const suma = (num1, num2) => {
    return num1 + num2
}

/*
 * 
 * @param { number } num1 minuendo de la resta
 * @param { number } num2 sustraendo de la resta
 * @returns 
 */

const resta = (num1, num2) => {
    return num1 - num2
}

/*
 * 
 * @param { number } num1 factor1 de la multiplicación
 * @param { number } num2 factor2 de la multiplicación 
 * @returns 
 */

const multiplicacion = (num1, num2) => {
    return num1 * num2
}

/*
 * 
 * @param { number } num1 dividendo de la división
 * @param { number } num2 divisor de la división
 * @returns 
 */

const division = (num1, num2) => {
    return num1 / num2
}

function obtenerInputs() {
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    return [numero1, numero2]
}

function operar(num1, num2, operacionArealizar) {
    return operacionArealizar(num1, num2)
}

function pintarEnPantalla(nuevoValor) {
    document.getElementById('operacion-resultado').innerHTML = nuevoValor
}

/*
 *
 * @param { string } operacionArealizar Esto define el tipo de operación a realizar
 * 
 */

function operacion(operacionArealizar) {

    //Otra variable que puede funcionar
    /*const  numeros = obtenerInputs()
    let num1 = numeros[0]
    let num2 = numeros[1]*/

    const [ num1, num2 ] = obtenerInputs();
    let resultado;

    switch (operacionArealizar) {
        case 'suma':
            resultado = operar(num1, num2, suma);
            break;
        case 'resta':
            resultado = operar(num1, num2, resta);
            break;
        case 'multiplicacion':
            resultado = operar(num1, num2, multiplicacion);
            break;
        default:
            resultado = operar(num1, num2, division);
    }


    pintarEnPantalla(resultado)
}