const btnNo = document.querySelector("#btn-no");
const btnSi = document.querySelector("#btn-si");
const preAceptar = document.querySelector("#pre-aceptar");
const postAceptar = document.querySelector("#post-aceptar");

// Función para mover el botón de posición
const moverBoton = () => {
    // Calculamos posiciones aleatorias dentro del ancho y alto de la ventana
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
};

// Evento para computadoras (Mouse)
btnNo.addEventListener("mouseover", moverBoton);

// Evento para celulares (Touch)
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita que se haga click al intentar tocarlo
    moverBoton();
});

// Al dar click en SÍ, cambiamos lo que se muestra
btnSi.addEventListener("click", () => {
    preAceptar.classList.add("hidden");
    postAceptar.classList.remove("hidden");
});
