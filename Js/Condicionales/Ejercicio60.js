let lado1 = prompt("Ingrese la medida del lado 1 del triángulo");
let lado2 = prompt("Ingrese la medida del lado 2 del triángulo");
let lado3 = prompt("Ingrese la medida del lado 3 del triángulo");

if (lado1 == lado2  || lado1 == lado3 || lado2 == lado3 ) {
    console.log("El triángulo ingresado es isósceles","dos de sus lados son iguales:", lado1, lado2, lado3)
};

if (lado1 == lado2 && lado1 == lado3) {
    console.log("El triángulo ingresado es equilátero","todos sus lados son:", lado1, lado2, lado3)
};

if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    console.log("El triángulo ingresado es escaleno","ninguno sus lados son:", lado1, lado2, lado3)
};