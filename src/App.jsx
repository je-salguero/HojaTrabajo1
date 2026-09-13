import Galeria from "./components/Galeria";
import Cotizador from "./components/Cotizador";
import Itinerario from "./components/Itinerario";
import Actividades from "./components/Actividades";
import Reserva from "./components/Reserva";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="contenedor-app">
      <h1>Gran Excursión a Semuc Champey</h1>

      <h2>Índice</h2>
      <ul>
        <li><a href="#descripcion">Descripción del lugar</a></li>
        <li><a href="#galeria">Galería de imágenes</a></li>
        <li><a href="#cotizador">Cotizador de Viaje</a></li>
        <li><a href="#itinerario">Tabla de itinerarios</a></li>
        <li><a href="#actividades">Lista de actividades extra</a></li>
        <li><a href="#reserva">Reserva tu espacio</a></li>
      </ul>

      <hr />

      <section id="descripcion">
        <h2>Descripción del lugar</h2>
        <p>
          Semuc Champey es un paraíso natural ubicado en el municipio de
          Lanquín, Alta Verapaz...
        </p>
        <Testimonials />
      </section>

      <hr />

      <Galeria />

      <hr />

      <Cotizador />

      <hr />

      <Itinerario />

      <hr />

      <Actividades />

      <hr />

      <Reserva />

      <br />
      <br />

      <footer>
        <p>Desarrollado por: José Salguero</p>
      </footer>
    </div>
  );
}

export default App;
