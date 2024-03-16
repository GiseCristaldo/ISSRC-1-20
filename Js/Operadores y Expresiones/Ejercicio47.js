//Define una variable llamada `precioProducto` y otra llamada `cantidadComprada`. Calcula el costo total de la compra
//multiplicando estas variables y muestra el resultado en
//la consola.
let comprarProducto = prompt('¿Desea comprar una hamburquesa?');

if (comprarProducto == "si" || comprarProducto === "Si"){
    alert('El precio por unidad es $150')   
}

let precioProducto = 150;

let cuantosDese = prompt('¿Cuántas desea? Informa la cantidad en números'); 

var cantidadComprada = (cuantosDese * precioProducto);

alert(`El total de su compra son $ ${cantidadComprada}`);


//console.log(cantidad);


