// Solicita al usuario que introduzca un texto
let texto = window.prompt("Introduce un texto", "");

// Función para encontrar la posición de la primera vocal
function encontrarPrimeraVocal(texto) {
    // Definir las vocales
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Recorrer el texto para encontrar la primera vocal
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            return { vocal: texto[i], posicion: i + 1 };
        }
    }

    // Si no se encuentra ninguna vocal
    return null;
}

// Encontrar la primera vocal en el texto
let resultado = encontrarPrimeraVocal(texto);

// Mostrar el resultado
if (resultado) {
    document.write(`La primera vocal es "${resultado.vocal}" y es la letra Nº${resultado.posicion}`);
} else {
    document.write("No se encontraron vocales en el texto.");
}
