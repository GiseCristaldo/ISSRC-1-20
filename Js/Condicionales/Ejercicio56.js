//56. Crea una variable llamada `calificacion` y asígnale un valor numérico entre 0 y 100. 
//Utiliza una estructura condicional `if...else if...else` para mostrar en la consola si la
//calificación es "Excelente," "Aprobado," o "Reprobado" según un rango de calificaciones.

let calificacion = prompt("Ingrese su calificación en un rango del 0 al 10");
// < 5 reprobado
// >= 9 aprobado 
// == 10 excelente

if (calificacion <= 5 ){
    alert("Su calificación es"+ " " + calificacion + " " + "estas reprobado")
}

if (calificacion >= 6 && calificacion <= 9 ){
    alert("Su calificación es"+ " " + calificacion + " " + "estas Aprobado")
}

if (calificacion == 10 ){
    alert("Su calificación es,"+ " " + calificacion + " " + "es Excelente, ¡Felicidades!")
}