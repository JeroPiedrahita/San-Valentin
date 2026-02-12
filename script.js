const btnNo = document.querySelector("#btn-no");
const btnSi = document.querySelector("#btn-si");
const preAceptar = document.querySelector("#pre-aceptar");
const postAceptar = document.querySelector("#post-aceptar");

// Hacer que el botón "No" huya
btnNo.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});

// Acción al dar clic en "Sí"
btnSi.addEventListener("click", () => {
    preAceptar.classList.add("hidden");
    postAceptar.classList.remove("hidden");
});
