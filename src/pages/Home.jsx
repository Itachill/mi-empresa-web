import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a TrasherBox</h1>
      <div className="gallery">
        <img src="/img1.jpg" alt="Imagen 1" />
        <img src="/img2.jpg" alt="Imagen 2" />
        <img src="/img3.jpg" alt="Imagen 3" />
      </div>
      <section>
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos TrasherBox, un equipo comprometido con ofrecer soluciones
          innovadoras para el manejo responsable de residuos.
        </p>
      </section>
      <section>
        <h2>¿A qué nos dedicamos?</h2>
        <p>
          Nos enfocamos en proveer productos y servicios que facilitan el
          reciclaje y la disposición ecológica de materiales.
        </p>
      </section>
    </div>
  );
}

export default Home;
