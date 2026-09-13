const filasItinerario = [
  {
    id: 1,
    fecha: "15 de Agosto",
    horario: "06:00 AM",
    actividad: "Salida en bus",
    lugar: "Ciudad Capital",
  },
  {
    id: 2,
    fecha: "15 de Agosto",
    horario: "02:00 PM",
    actividad: "Llegada e instalación",
    lugar: "Lanquín",
  },
];

function Itinerario() {
  return (
    <section id="itinerario">
      <h2>Itinerario de la Excursión</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Actividad</th>
            <th>Lugar</th>
          </tr>
        </thead>
        <tbody>
          {filasItinerario.map((fila) => (
            <tr key={fila.id}>
              <td>{fila.fecha}</td>
              <td>{fila.horario}</td>
              <td>{fila.actividad}</td>
              <td>{fila.lugar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Itinerario;
