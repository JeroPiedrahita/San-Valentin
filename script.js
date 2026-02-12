document.addEventListener("DOMContentLoaded", () => {
    const btnNo = document.getElementById("btn-no");
    const btnSi = document.getElementById("btn-si");
    const pantallaPregunta = document.getElementById("pantalla-pregunta");
    const pantallaExito = document.getElementById("pantalla-exito");

    const moverBoton = () => {
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
        
        btnNo.style.position = "fixed";
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    };

    // Evento para mouse
    btnNo.addEventListener("mouseover", moverBoton);

    // Evento para celular (Aquí estaba el error de cierre)
    btnNo.addEventListener("touchstart", (e) => {
        e.preventDefault(); 
        moverBoton();
    }); // <-- Aquí faltaba el ");"

    // Acción del botón SÍ
    btnSi.onclick = () => {
        pantallaPregunta.classList.add("hidden");
        pantallaExito.classList.remove("hidden");
        
        // Opcional: ocultamos el botón "No" por si quedó volando por ahí
        btnNo.style.display = "none";
    };
});
