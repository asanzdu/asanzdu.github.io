//efecto fadeIn en el título al cargar el archivo
const titulo = document.querySelector("h1");

titulo.className = "animacion-titulo";

setTimeout(() => {
    titulo.className = "";
}, 1000);

//visualización del menú para mantenerlo fijo detectando el scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        document.querySelector(".menu-fijo").classList.add("fijo");
    } else {
        document.querySelector(".menu-fijo").classList.remove("fijo");
    }
});

//ok de campos del formulario
const formulario = document.querySelector("#contacto form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = e.target.querySelector("input[name='nombre']").value;
    const email = e.target.querySelector("input[name='email']").value;
    const mensaje = e.target.querySelector("textarea[name='mensaje']").value;

    if (!nombre || !email || !mensaje) {
        alert("Todos los campos son obligatorios");
        return;
    }

    alert("Formulario enviado correctamente");
});

//porcentajes de dominio de habilidades
const habilidades = document.querySelectorAll("#habilidades ul li");

habilidades.forEach((habilidad) => {
    const porcentajeInicio = habilidad.getAttribute("data-porcentaje");
    const porcentajeFinal = 100 - parseInt(habilidad.getAttribute("data-porcentaje"));
    const colorInicio = "green";
    const colorFinal = "white";

    habilidad.style.background = `linear-gradient(to right, ${colorInicio} ${porcentajeInicio}%, ${colorFinal} ${porcentajeFinal}%`;
    console.log(habilidad.style.background);
});




const enlaces = document.querySelectorAll("nav a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault();

        const seccion = document.querySelector(e.target.getAttribute("href"));
        const offsetY = seccion.offsetTop - 80; 

        window.scrollTo({
            top: offsetY,
            behavior: "smooth",
        });
    });
});