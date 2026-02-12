const btnNo = document.querySelector("#btn-no");
const btnSi = document.querySelector("#btn-si");
const pantallaPregunta = document.querySelector("#pantalla-pregunta");
const pantallaExito = document.querySelector("#pantalla-exito");

// Función para mover el botón No
const moverBoton = () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
};

btnNo.addEventListener("mouseover", moverBoton);
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverBoton();
});

// Al dar clic en SÍ, intercambiamos pantallas
btnSi.addEventListener("click", () => {
    pantallaPregunta.classList.add("hidden"); // Oculta la pregunta
    pantallaExito.classList.remove("hidden"); // Muestra el éxito
});
