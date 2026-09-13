import { useState } from "react";

function Reserva() {
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setError("");
    setMensaje("");

    const nombreValido = nombre.trim() !== "";
    const personasNumero = Number(personas);
    const personasValidas =
      personas !== "" && !Number.isNaN(personasNumero) && personasNumero > 0;

    if (!nombreValido || !personasValidas) {
      setError(
        "Por favor, completa todos los campos antes de enviar (la cantidad de personas debe ser mayor a 0)."
      );
      return;
    }

    setMensaje(
      `¡Gracias ${nombre}, tu solicitud para ${personas} personas ha sido registrada!`
    );
    setNombre("");
    setPersonas("");
  };

  return (
    <section id="reserva">
      <h2>Reserva tu espacio</h2>
      <div className="seccion-interactiva">
        <form onSubmit={manejarEnvio}>
          <label htmlFor="nombreReserva">Nombre completo:</label>
          <br />
          <input
            type="text"
            id="nombreReserva"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="personasReserva">Cantidad de personas:</label>
          <br />
          <input
            type="number"
            id="personasReserva"
            min="1"
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
          />
          <br />
          <br />

          <button type="submit">Enviar Reserva</button>
        </form>

        {error && (
          <h3 style={{ color: "#b02a2a" }}>{error}</h3>
        )}

        {mensaje && (
          <h3 id="mensajeConfirmacion" style={{ color: "#2e5939" }}>
            {mensaje}
          </h3>
        )}
      </div>
    </section>
  );
}

export default Reserva;
