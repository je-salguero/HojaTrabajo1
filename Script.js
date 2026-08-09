
const modal = document.getElementById('modalGaleria');
const modalImg = document.getElementById('imgModal');
const modalTexto = document.getElementById('textoModal');
const btnCerrar = document.getElementById('cerrarModal');
const imagenes = document.querySelectorAll('.img-galeria');

imagenes.forEach(img => {
    img.addEventListener('click', function() {
        modal.classList.remove('oculto'); 
        modalImg.src = this.src;          
        modalTexto.textContent = this.alt;
    });
});

btnCerrar.addEventListener('click', function() {
    modal.classList.add('oculto');
});

const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', function() {
    const asistentes = parseInt(document.getElementById('numAsistentes').value);
    const paquetePrecio = parseInt(document.getElementById('tipoPaquete').value);
    const extras = document.getElementById('extras').checked; // Devuelve true o false

    if (asistentes > 0) {
        let total = asistentes * paquetePrecio;
        
        if (extras) {
            total += (asistentes * 150); 
        }
        
        document.getElementById('resultadoTotal').textContent = "Costo Total Estimado: Q" + total;
    } else {
        document.getElementById('resultadoTotal').textContent = "Por favor, ingresa una cantidad válida de asistentes.";
    }
});

const buscador = document.getElementById('buscadorActividades');
const listaActividades = document.querySelectorAll('#listaActividades li');

buscador.addEventListener('input', function() {
    const textoBusqueda = this.value.toLowerCase();

    listaActividades.forEach(actividad => {
        const textoActividad = actividad.textContent.toLowerCase();
        
        if (textoActividad.includes(textoBusqueda)) {
            actividad.classList.remove('oculto');
        } else {
            actividad.classList.add('oculto');
        }
    });
});


const formReserva = document.getElementById('formReserva');
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

formReserva.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombreReserva').value;
    const personas = document.getElementById('personasReserva').value;

    if (nombre.trim() === "" || personas === "") {
        alert("Por favor, completa todos los campos antes de enviar.");
    } else {
        mensajeConfirmacion.textContent = `¡Gracias ${nombre}, tu solicitud para ${personas} personas ha sido registrada!`;
        mensajeConfirmacion.classList.remove('oculto');
        formReserva.reset(); 
    }
});


const nombres = ["Ana Gómez", "Carlos López", "María Fernanda", "Luis Castillo", "Sofía Reyes"];
const comentarios = [
    "¡Una experiencia increíble, el agua es súper cristalina!",
    "Excelente organización, el mirador vale toda la pena.",
    "Las cuevas de K'anba fueron mi parte favorita, mucha adrenalina.",
    "Muy buen viaje, recomendado para ir con amigos.",
    "Semuc Champey es un paraíso, definitivamente volveré el próximo año."
];

const indiceAleatorio = Math.floor(Math.random() * nombres.length);

const contenedorTestimonios = document.getElementById('contenedorTestimonios');
contenedorTestimonios.innerHTML = `<strong>${nombres[indiceAleatorio]}:</strong> "${comentarios[indiceAleatorio]}"`;