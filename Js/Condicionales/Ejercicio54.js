//54. Define dos variables, `numero1` y `numero2`, y realiza una comparación 
//para determinar cuál de los dos números es mayor. Luego, muestra el número mayor en la consola.

let numero1 = prompt("Ingrese un número")

let numero2 = prompt("Ingrese otro número")

let condicion = numero1 > numero2;

console.log("Condición:", condicion)

if (condicion){
    console.log("Se cumple la condición, el valor guardado como primer número es mayor que el valor guardado como segundo.")
}

else {
    console.log("NO cumple la condición, el valor guardado como primer número es menor que el valor guardado como segundo")
};