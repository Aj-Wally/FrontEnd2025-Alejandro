function renap(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve(`Felicidades! Tienes ${edad} años y se te ha otorgado un DPI.`);
            } else {
                reject("Lo sentimos, eres menor de edad y no puedes obtener un DPI.");
            }
        }, 1000);
    });
}

function solicitarDPI() {
    const edad = Number(prompt("Ingrese su edad:"));

    renap(edad)
        .then((mensaje) => {
            alert(mensaje);
        })
        .catch((error) => {
            alert(error);
        });
}

function comprarMacdonals(efectivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (efectivo >= 65) {
                resolve("Tenga su McDonald's :D ");
            } else {
                reject("Lo siento, no le alcanza para la hamburguesa :( ");
            }
        }, 1000);
    });
}

function comprarPepsi(efectivo) {
    return new Promise((resolve, reject)=>{

        if(efectivo >= 5) {
            resolve("Ten tu pepsi");
        }else{
            reject("No te alcanza para la pepsi :( ")
        }
    })
}

function cargaEfectivo(){
    const efectivo = Number(prompt("Dime, cuanto tienes?"))
    comprarMacdonals(efectivo)
    .then(res => {
        alert(res)
        let restoDeEfecto = Number(prompt("Cuanto tienes aun?"))
        return comprarPepsi(restoDeEfecto)
    })
    .then(res => {
        alert(res)
    })
    .catch(err => alert(err))
}