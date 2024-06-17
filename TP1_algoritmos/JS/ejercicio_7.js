// Array proporcionado
var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// Filtrar solo los elementos de tipo texto
var textos = valores.filter(elemento => typeof elemento === 'string');

// 1. Determinar cuál de los “elementos de texto” es mayor
var mayorTexto = textos.reduce((a, b) => a.length > b.length ? a : b);
console.log("El elemento de texto con más letras es:", mayorTexto);

// 2. Imprimir estos elementos de menor a mayor cantidad de letras
var textosOrdenados = textos.sort((a, b) => a.length - b.length);
console.log("Elementos de texto ordenados por cantidad de letras:", textosOrdenados);

// Filtrar solo los elementos numéricos
var numeros = valores.filter(elemento => typeof elemento === 'number');

// 3. Realizar las operaciones matemáticas básicas con los elementos numéricos
if (numeros.length === 2) {
    var suma = numeros[0] + numeros[1];
    var resta = numeros[0] - numeros[1];
    var multiplicacion = numeros[0] * numeros[1];
    var division = numeros[0] / numeros[1];

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
} else {
    console.log("No hay suficientes elementos numéricos para realizar las operaciones.");
}
