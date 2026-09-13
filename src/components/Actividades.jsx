import { useMemo, useState } from "react";

const actividades = [
  { id: 1, texto: "Exploración de las Cuevas de K'anba con velas." },
  {
    id: 2,
    texto: "Tubing (recorrido en dona inflable) por los rápidos del Río Cahabón.",
  },
  {
    id: 3,
    texto: "Senderismo por la selva tropical observando la flora y fauna local.",
  },
  { id: 4, texto: "Degustación de chocolate artesanal en el pueblo de Lanquín." },
];

function Actividades() {
  const [busqueda, setBusqueda] = useState("");

  const actividadesFiltradas = useMemo(() => {
    const texto = busqueda.toLowerCase();
    return actividades.filter((actividad) =>
      actividad.texto.toLowerCase().includes(texto)
    );
  }, [busqueda]);

  return (
    <section id="actividades">
      <h2>Otras Actividades para Realizar</h2>

      <input
        type="text"
        id="buscadorActividades"
        placeholder="Buscar actividad... (ej. Cuevas)"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul id="listaActividades">
        {actividadesFiltradas.map((actividad) => (
          <li key={actividad.id}>{actividad.texto}</li>
        ))}
      </ul>
    </section>
  );
}

export default Actividades;
