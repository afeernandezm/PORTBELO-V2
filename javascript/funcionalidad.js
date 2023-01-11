
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", e => {
    e.preventDefault();
    const boton = document.querySelector("#botonIn");
    const alertaPrevia = document.querySelector(".alert");

    if (alertaPrevia) {
        alertaPrevia.remove();
    }
    const alerta = document.createElement("DIV");

    alerta.classList.add("alert");
    if (localStorage.getItem("nombre") == null) {
        const nombre = document.querySelector("#nombreR").value;
        const email = document.querySelector("#emailR").value;
        const contraseña = document.querySelector("#contraseñaR").value;

        if (nombre === "" || email === "" || contraseña === "") {
            alerta.textContent = "Todos los campos son obligatorios";
            alerta.classList.add("alert-danger");
        } else {
            alerta.textContent = "Todo correcto, enviando formulario...";
            alerta.classList.add("alert-success");
            localStorage.setItem("nombre", nombre);
            document.getElementById("botonIn").innerHTML = localStorage.getItem("nombre");
            ocultarModal();
            $("#botonIn").attr("data-bs-target", "#cerrarSesion");
        }
        formulario.appendChild(alerta);

    } else {
        localStorage.clear();
        $("#exampleModal").show();
        document.getElementById("botonIn").innerHTML = `<img
            src="imagenes/usuario.png" alt="usuario" id="usuario">`;
    }

});

const formularioContacto = document.querySelector(".formulario");
formularioContacto.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const textArea = document.querySelector("#text").value;

    const alertaPrevia = document.querySelector(".alert");
    if (alertaPrevia) {
        alertaPrevia.remove();
    }
    const alerta = document.createElement("DIV");

    alerta.classList.add("alert");

    if (nombre === "" || correo === "" || textArea === "") {
        alerta.textContent = "Los campos Nombre, Correo y el campo del mensaje son obligatorios";
        alerta.classList.add("alert-danger");
    } else {
        alerta.textContent = "Mensaje enviado.";
        alerta.classList.add("alert-success");
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("text").value = "";
    }
    formularioContacto.appendChild(alerta);
});

function ocultarModal() {
    $("#exampleModal").hide();
    $(".modal-backdrop").hide();
    $(".modal-backdrop").hide();
}



const url = "https://jsonplaceholder.typicode.com/comments";


const consultarAPI = async () => {
    const cuerpoModal = document.querySelector("#cuerpoModal");
    const titulo = document.createElement("h2");
    titulo.classList.add("text-center");
    titulo.textContent = "COMENTARIOS";
    cuerpoModal.appendChild(titulo);

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    for (let i = 0; i < 5; i++) {
        const nombre = document.createElement("p");
        const email = document.createElement("p");
        const body = document.createElement("p");
        const separador = document.createElement("hr");
        cuerpoModal.appendChild(separador);
        nombre.textContent = "Nombre: " + resultado[i].name;
        cuerpoModal.appendChild(nombre);
        email.textContent = "Email:" + resultado[i].email;
        cuerpoModal.appendChild(email);
        body.textContent = "Cuerpo:" + resultado[i].body;
        cuerpoModal.appendChild(body);
    }

}

consultarAPI();

