window.onload = function() {
    const audio = document.getElementById('audio');

    // Intenta reproducir el audio y maneja posibles errores de autoplay bloqueado
    audio.play().catch((error) => {
        console.log("El navegador bloqueó la reproducción automática del audio:", error);
    });

    // Posicionar los girasoles aleatoriamente
    const girasoles = document.querySelectorAll(".girasol");

    function getRandomPosition() {
        const x = Math.random() * (window.innerWidth - 50); // Evita que salgan de la pantalla
        const y = Math.random() * (window.innerHeight - 50);
        return { x: `${x}px`, y: `${y}px` };
    }

    girasoles.forEach(girasol => {
        const position = getRandomPosition();
        girasol.style.position = "absolute";
        girasol.style.left = position.x;
        girasol.style.top = position.y;

        const delay = Math.random() * 5;
        girasol.style.animationDelay = `${delay}s`;
    });
};
