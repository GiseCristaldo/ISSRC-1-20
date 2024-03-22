
let hora = prompt("Ingrese una hora en formato 24hs");

if (hora >= 6 && hora <= 12) {
    console.log("¡Buenos días, son las", " ", hora, "hs")}

if (hora > 12 && hora <= 18) {
    console.log("¡Buenas tardes, son las", " ", hora, "hs")}

if (hora > 18 && hora <= 24 || hora >= 0 && hora < 6) {
    console.log("¡Buenas noches, son las", " ", hora, "hs")}