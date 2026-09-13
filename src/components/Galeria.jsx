import { useState } from "react";
import imagenesGaleria from "../data/galeriaData";
import ImagenModal from "./ImagenModal";

function Galeria() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  return (
    <section id="galeria">
      <h2>Galería de imágenes (Haz clic para ampliar)</h2>
      <div className="grid-galeria">
        {imagenesGaleria.map((imagen) => (
          <img
            key={imagen.id}
            className="img-galeria"
            src={imagen.src}
            alt={imagen.alt}
            width="250"
            onClick={() => setImagenSeleccionada(imagen)}
          />
        ))}
      </div>

      <ImagenModal
        imagen={imagenSeleccionada}
        onCerrar={() => setImagenSeleccionada(null)}
      />
    </section>
  );
}

export default Galeria;
