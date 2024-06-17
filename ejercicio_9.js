// Función para solicitar una nota al usuario y asegurarse de que sea válida
function solicitarNota(indice) {
    let nota;
    do {
        nota = parseInt(window.prompt(`Introduce la nota ${indice + 1} (natural < 11):`));
    } while (isNaN(nota) || nota < 0 || nota >= 11);
    return nota;
}

// Array para almacenar las 5 notas
let notas = [];

// Solicitar las 5 notas al usuario
for (let i = 0; i < 5; i++) {
    notas.push(solicitarNota(i));
}

// Calcular el promedio de las notas
let suma = notas.reduce((a, b) => a + b, 0);
let promedio = suma / notas.length;

// Determinar y mostrar el resultado según el promedio
if (promedio < 5) {
    document.write("Reprobado");
} else if (promedio >= 5 && promedio <= 8) {
    document.write("Aprobado");
} else {
    document.write("Sobresaliente");
}
