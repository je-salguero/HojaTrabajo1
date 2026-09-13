function ImagenModal({ imagen, onCerrar }) {
  if (!imagen) return null;

  return (
    <div className="modal-galeria" onClick={onCerrar}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <img id="imgModal" src={imagen.src} alt={imagen.alt} />
        <p id="textoModal">{imagen.alt}</p>
        <button id="cerrarModal" onClick={onCerrar}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ImagenModal;
