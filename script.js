document.addEventListener("DOMContentLoaded", () => {
    const btnNo = document.getElementById("btn-no");
    const btnSi = document.getElementById("btn-si");
    const pantallaPregunta = document.getElementById("pantalla-pregunta");
    const pantallaExito = document.getElementById("pantalla-exito");

    const moverBoton = () => {
        // Calculamos nuevas coordenadas aleatorias
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
        
        // Al moverlo, usamos 'fixed' para que escape por TODA la pantalla
        btnNo.style.position = "fixed";
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    };

    // Eventos para el botón que huye
    btnNo.addEventListener("mouseover", moverBoton);
    btnNo.addEventListener("touchstart", (e) => {
        e.preventDefault(); 
        moverBoton();
    });

    // Acción del botón SÍ
    btnSi.onclick = () => {
        pantallaPregunta.classList.add("hidden");
        pantallaExito.classList.remove("hidden");
        btnNo.style.display = "none"; // Desaparece el botón No definitivamente
    };
});
