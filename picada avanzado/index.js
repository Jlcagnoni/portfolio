const nombre = prompt("Cómo te llamas?")

alert("Hola " + nombre + "! Bienvenido a mi portfolio!")

// Array de frases
const frases = [
        "No dejes para mañana lo que puedes picar hoy.",
        "Esta picada esta mas buena que finde largo",
        "A picar mi amor, vamos a picar mi amor.",
        "Se puede discutir de todo, menos lo rica que son nuestras picadas.",
        "Temporada alta de picadas, o temporada de altas picadas.",
        "La edad solo es importante si eres un queso o un vino.",
        "Lo mejor de la picada es con quien la compartis.",
        "Nosotros cortamos los fiambres para vos... vos corta la semana con nosotros."
    ];
    // Función para generar una frase aleatoria
    function generarFrase() {
        // Genera un índice aleatorio dentro del rango de la longitud del array de frases
        const indice = Math.floor(Math.random() * frases.length);
        // Obtiene la frase correspondiente al índice generado
        const fraseAleatoria = frases[indice];
        // Muestra la frase en el footer
        document.getElementById("frase").innerText = fraseAleatoria;
    }
    // Agrega un listener al botón para ejecutar la función generarFrase cuando se haga clic
    document.getElementById("btn-generar").addEventListener("click", generarFrase);