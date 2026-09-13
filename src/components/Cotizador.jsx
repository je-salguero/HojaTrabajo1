import { useMemo, useState } from "react";

const PRECIO_TRANSPORTE = 150;

function Cotizador() {
  const [numAsistentes, setNumAsistentes] = useState(1);
  const [tipoPaquete, setTipoPaquete] = useState(350);
  const [incluirTransporte, setIncluirTransporte] = useState(false);

  const asistentesValidos = Number(numAsistentes) > 0;

  const total = useMemo(() => {
    if (!asistentesValidos) return 0;
    let subtotal = numAsistentes * tipoPaquete;
    if (incluirTransporte) {
      subtotal += numAsistentes * PRECIO_TRANSPORTE;
    }
    return subtotal;
  }, [numAsistentes, tipoPaquete, incluirTransporte, asistentesValidos]);

  return (
    <section id="cotizador">
      <h2>Cotizador de Viaje</h2>
      <div className="seccion-interactiva">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="numAsistentes">Número de asistentes:</label>
          <br />
          <input
            type="number"
            id="numAsistentes"
            min="1"
            value={numAsistentes}
            onChange={(e) => setNumAsistentes(Number(e.target.value))}
          />
          <br />
          <br />

          <label htmlFor="tipoPaquete">Tipo de paquete:</label>
          <br />
          <select
            id="tipoPaquete"
            value={tipoPaquete}
            onChange={(e) => setTipoPaquete(Number(e.target.value))}
          >
            <option value="350">Básico (Q350 por persona)</option>
            <option value="500">Completo con hospedaje (Q500 por persona)</option>
          </select>
          <br />
          <br />

          <input
            type="checkbox"
            id="extras"
            checked={incluirTransporte}
            onChange={(e) => setIncluirTransporte(e.target.checked)}
          />
          <label htmlFor="extras">
            Incluir transporte desde la capital (+Q150 por persona)
          </label>
        </form>

        <h3 id="resultadoTotal">
          {asistentesValidos
            ? `Costo Total Estimado: Q${total}`
            : "Por favor, ingresa una cantidad válida de asistentes."}
        </h3>
      </div>
    </section>
  );
}

export default Cotizador;
