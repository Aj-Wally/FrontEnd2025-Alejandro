function imprimirNombre() {
    let nombre = prompt("Dame tu nombre");
    let imprimeMiNombre = document.getElementById("nombreUsuario");
  
    imprimeMiNombre.innerHTML = `Bievenido ${nombre}`;
  }
  
  function concatenacionExtension() {
    let nombreUsuario = prompt("Dame tu nombre");
    // crea otra variable con un saludo
  
    // En un alert imprime, el nombre, mas el saludo y el numero de caracteres del nombre
  
    // .length para el nombre
    // \n para un salto de linea
    // concatena con + y con balstik
  }
  
  function obtenerElTiempo() {
    // Piensa en 90 como la media de edad de un humano
    const edad = Number(
      document.getElementById("edadHumano").value
    );
    const edadRestante = 90 - edad 
    let dias, meses, semanas;
    /*
      365 days in a year
      52 weeks in a year
      12 months in a year.
      */
    dias = edadRestante * 365
    semanas = edadRestante * 52
    meses = edadRestante * 12
    let textoHumano = document.getElementById("textoHumano")
    
    // textoHumano.innerHTML = "Tu tienes <b>" + dias + "</b> dias, <b>" + semanas + "</b> semanas, y <b>" + meses +  "</b> meses todavía.";
    textoHumano.innerHTML = `Tu tienes <b>${dias}</b> dias, <b>${semanas}</b> semanas, y <b>${meses}</b> meses todavía.`;
  
  }
  
  function calcularIBM() {
    // obten los valores de peso y altura del select list
    let weightType = document.getElementById("weight").value;
    let heightType = document.getElementById("height").value;
  
    // obtenen los valores de peso y altura de los inputs
  
    // si es libras opera
    // weight /= 2.20462;
  
    // usa la formula
    // BMI = (weight / heigth ^ 2)
    // let BMI = weight /  height ** 2;
  
    // evalua
    // if BMI > 24.9 =overweight";
    // if BMI < 24.9 && BMI >=18.5 = normal weight";
    // if BMI under 18.5 = underweight"
  
    // asigna a resultadoIBM
  }