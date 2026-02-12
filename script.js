const btnNo = document.querySelector("#btn-no");
const btnSi = document.querySelector("#btn-si");
const preAceptar = document.querySelector("#pre-aceptar");
const postAceptar = document.querySelector("#post-aceptar");

// Función para mover el botón "No"
const moverBotonNo = () => {
    // Calculamos nuevas coordenadas aleatorias
    // Restamos el tamaño del botón para que no se salga del borde derecho/inferior
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.position = "absolute";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
};

// Se activa al pasar el mouse (PC) o al intentar tocar (Celular)
btnNo.addEventListener("mouseover", moverBotonNo);
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita que se haga click accidentalmente en móviles
    moverBotonNo();
});

// Acción al dar clic en "Sí"
btnSi.addEventListener("click", () => {
    preAceptar.classList.add("hidden");
    postAceptar.classList.remove("hidden");
});
