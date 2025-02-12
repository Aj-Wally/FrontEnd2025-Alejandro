
/*FUNCIONES EXPRESIVAS*/
const suma = function(numero1, numero2) {
    let resultado = numero1 + numero2
    return resultado
};

const multiplicacion = (numero1, numero2) => {
    return numero1 * numero2;
};


const obtenerValordeDom = function(id){
};

/* FUNCIONES DECLARADAS*/
function saludame1(){
    alert("Hola")
}

function saludame2(nombre) {
    let apellido = "cualquier apellido"

    alert(`Hola, bienvenido ${nombre}`)
}

function operacion() {

    const resta = function(numero1, numero2){
        return numero1 - numero2
    }

    const division = (numero1, numero2) => numero1 / numero2;

    
    let resultadoOperacion;
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)

    let operacionElegida = prompt("Que operación deseas hacer? \nSuma \nResta \nMultplicacion \nDivision")

    operacionElegida = operacionElegida.toLocaleLowerCase()

    if(operacionElegida === 'suma'){
        resultadoOperacion = suma(numero1, numero2)
    }else if(operacionElegida === 'resta'){
        resultadoOperacion = resta(numero1, numero2)
    }else if(operacionElegida === 'multiplicacion'){
        resultadoOperacion = multiplicacion(numero1, numero2)
    }else if(operacionElegida === 'division'){
        resultadoOperacion = division(numero1, numero2)
    }else{
        resultadoOperacion = "La opción elegida no es válida"
    }


    alert(`El resultado de la suma es ${resultadoOperacion} `)
}


function dimeQuienEres(){
    const yoSoy = 'Yo soy la funcion "DimeQuienEres"'
    console.log(this)
    const quienSoy1 = function(){
        console.log("Llamando a quienSoy1")
        console.log("CONSOLE FUNCION ANONIMA")
        console.log(this)

    }

    const quienSoy2 = ()=>{
        console.log("Llamando a quienSoy1")
        console.log("CONSOLE ARROW FUNCION")
        console.log(this)
    }

    quienSoy1()
    quienSoy2()
}


