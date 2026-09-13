import { useState } from "react";
import { nombres, comentarios } from "../data/testimoniosData";

function obtenerIndiceAleatorio(excluir, longitud) {
  if (longitud <= 1) return 0;
  let indice;
  do {
    indice = Math.floor(Math.random() * longitud);
  } while (indice === excluir);
  return indice;
}

function Testimonials() {
  const [indice, setIndice] = useState(() =>
    Math.floor(Math.random() * nombres.length)
  );

  const verOtraOpinion = () => {
    setIndice((actual) => obtenerIndiceAleatorio(actual, nombres.length));
  };

  return (
    <div className="seccion-interactiva" id="seccionTestimonios">
      <h3>Opiniones de nuestros visitantes</h3>
      <p id="contenedorTestimonios">
        <strong>{nombres[indice]}:</strong> "{comentarios[indice]}"
      </p>
      <button type="button" onClick={verOtraOpinion}>
        Ver otra opinión
      </button>
    </div>
  );
}

export default Testimonials;
