//Crea una variable llamada `diaSemana` y asígnale el nombre de un día de la semana.
//Utiliza una declaración `switch` para mostrar un mensaje que indique si es un "Día
//laboral" o "Fin de semana" en función del valor de `diaSemana`.

let diaSemana = prompt("Ingrese un día de la semana");

switch (diaSemana) {
  case "sabado" || "domingo":
    console.log("Fin de semana");
    break;
  case "lunes":
    console.log("Día laboral");
    break;
  case "martes":
    console.log("Día laboral");
    break;
  case "miércoles":
    console.log("Día laboral");
    break;
  case "jueves":
    console.log("Día laboral");
    break;
  case "viernes":
    console.log("Día laboral");
    break;

  default:
    console.log("El dato ingresado no corresponde a un día de la semana.");
    break
}
