function esPar (numero) {
 
    let resto = numero % 2;
 
    return resto == 0; 

}

let entrada = prompt("Indica el número a evaluar")

console.log(
'El número ingresado es', esPar(entrada) ? 'es par': 'es impar');