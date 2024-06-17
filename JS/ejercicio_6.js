
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];


let numero = parseInt(window.prompt("Introduce un número del 1 al 12 para saber el mes correspondiente", ""));


if (numero >= 1 && numero <= 12) {
  
    document.write("El mes es: " + meses[numero - 1]);
} else {
   
    document.write("Número no válido. Por favor, introduce un número del 1 al 12.");
}
