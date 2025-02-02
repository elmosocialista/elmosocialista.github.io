const preguntas = [
    "¿Cuál es tu color favorito?",
    "¿Cuál es tu comida favorita?",
    "¿Cuál es tu película favorita?",
    "¿Cuál es tu lugar favorito?"
];

let preguntaActual = 0;
const preguntaElement = document.getElementById('pregunta');
const respuestaInput = document.getElementById('respuesta');
const siguienteBoton = document.getElementById('siguiente');
const preguntaContainer = document.getElementById('pregunta-container');
const invitacionContainer = document.getElementById('invitacion-container');

// Mostrar la primera pregunta
function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        preguntaElement.textContent = preguntas[preguntaActual];
        respuestaInput.value = ""; // Limpiar la respuesta al cambiar de pregunta
    } else {
        // Cuando se terminan las preguntas, muestra la invitación
        preguntaContainer.style.display = 'none';
        invitacionContainer.style.display = 'block';
    }
}

// Manejo del botón "Siguiente" (ahora solo avanza sin enviar formulario)
siguienteBoton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita cualquier acción predeterminada del formulario

    preguntaActual++; // Avanzar a la siguiente pregunta
    mostrarPregunta(); // Mostrar la nueva pregunta
});

// Mostrar la primera pregunta al cargar la página
mostrarPregunta();


// Mostrar la primera pregunta al cargar la página
mostrarPregunta();

// Lógica para el botón "Rechazar" (se mueve aleatoriamente)
const rechazarBoton = document.getElementById('rechazar');
rechazarBoton.addEventListener('mouseover', () => {
    // Obtener tamaño de la pantalla y del botón
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;
    const anchoBoton = rechazarBoton.offsetWidth;
    const altoBoton = rechazarBoton.offsetHeight;

    // Posición aleatoria dentro de la ventana
    const nuevaX = Math.random() * (anchoVentana - anchoBoton);
    const nuevaY = Math.random() * (altoVentana - altoBoton);

    // Aplicar las nuevas posiciones
    rechazarBoton.style.position = 'absolute';
    rechazarBoton.style.left = `${nuevaX}px`;
    rechazarBoton.style.top = `${nuevaY}px`;
});

// Evitar hacer clic en "Rechazar"
rechazarBoton.addEventListener('click', (e) => {
    e.preventDefault();
    alert("¡No puedes rechazarme! 😄");
});

// Lógica para el botón "Aceptar" (redirecciona a otra página)
document.getElementById('aceptar').addEventListener('click', () => {
    // Redirigir a otra página cuando se presiona "Aceptar"
    window.location.href = "TeAmoBelen.html"; // Cambia esto por la URL de la página a la que deseas redirigir
});
