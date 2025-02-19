let contador = -1
let fizzBuzz = []

function cambiarParagraph(contenido='Fizz Buzz:'){
    // recibir un parametro, string
    // asignado al node con id 'fizzBuzzResult'
    let nodeParrafo = document.getElementById('fizzBuzzResult');
    nodeParrafo.innerHTML = contenido
}

function pintarEnPantalla() {
    cambiarParagraph(
        'Fizz Buzz: ' + fizzBuzz.join(', ')
    )
}

function esFizzOEsBuzz(num) {
    if(num === 0){
     return num
    }else if(num % 3 === 0 && num % 5 === 0 ){
        return 'fizzBuzz'
    }else if(num % 3 === 0){
        return 'fizz'
    }else if(num % 5 === 0){
        return 'buzz'
    }
    
    return num
}

function siguiente(){
    fizzBuzz.push(
        esFizzOEsBuzz(++contador)
    )
    pintarEnPantalla()
}

function siguienteN(rondas=10){
    for (let index = 0; index < rondas; index++) {
        siguiente()
    }
}

function limpiar(){
    //encargada de vaciar la lista fizzBuzz, y limpiar el paragrahp
    fizzBuzz = []
    contador = -1
    cambiarParagraph()
}