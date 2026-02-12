const btnNo = document.querySelector("#btn-no");

const moverBoton = () => {
    // Calculamos el espacio disponible restando el tamaño del botón
    // para que no se salga de los bordes de la ventana
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    // Cambiamos a 'fixed' al moverlo para que se desplace por TODA la pantalla
    btnNo.style.position = "fixed";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
};

// Se activa al pasar el mouse
btnNo.addEventListener("mouseover", moverBoton);

// Se activa al intentar tocarlo en el celular (fundamental para su perfil de CM)
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita que el celular haga el "clic" real
    moverBoton();
});;
