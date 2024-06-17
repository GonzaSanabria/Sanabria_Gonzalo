// Declaración de variables 'dato' y 'resultado'
let dato, resultado;

// Solicita al usuario que introduzca su nombre y almacena el valor en 'val1'
val1 = window.prompt("Introduce tu nombre", "...");

// Solicita al usuario que introduzca su apellido y almacena el valor en 'val2'
val2 = window.prompt("Introduce tu apellido", "...");

// Concatena el nombre y apellido con un mensaje explicativo y lo almacena en 'resultado'
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} `;

// Escribe el resultado en el documento HTML
document.write(resultado);