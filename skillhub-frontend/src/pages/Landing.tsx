
import { Link } from 'react-router-dom';
// import del css
// import "../css/Landing.css";
// import de las imagenes
import skillhub from "../assets/Image_Skillhub.png";


export default function Landing() {
  return (
    <div className="container">

      {/* Botones de inicio y registrar sesion */}
      <div className="buttons">
          <Link to="/login" className="btn btn-primary btn-sm me-3">
            Iniciar Sesión
          </Link>
          <Link to="/registro" className="btn btn-outline-secondary btn-sm">
            Regístrate
          </Link>
      </div>

      

      {/* Texto de bienvenida */}
      <div className="text-center">
        <h1 className="display-4 fw-bold">¡Bienvenido a SkillHub!</h1>
        {/* Imagen de skillhub */}
        <img src={skillhub} alt="Imagen de skillhub" className="Imagen_landing w-72 mx-auto" />
        <p className="lead">
            ¿Buscas a alguien que diseñe por ti? Tenemos al profesional indicado.
        </p>
      </div>

      
        {/* Esto no.. CAMBIAR o ADAPTAR */}
      {/* Sección de beneficios */}
      <section className="section2 row mt-5 text-center">
        <div className="col-md-4">
          <h3>Variedad de Servicios</h3>
            <i className='bx bxs-check-shield'>
              <p>Encuentra desde plomeros hasta programadores.</p>
            </i>
        </div>
        <div className="col-md-4">
          <h3>Pago Seguro</h3>
            <i className='bx bxs-credit-card'>
              <p>Transacciones protegidas y garantizadas.</p>
            </i>
        </div>
        <div className="col-md-4">
          <h3>Calificaciones reales</h3>
            <i className='bx bxs-star-half'>
              <p>Revisa opiniones antes de contratar.</p>
            </i>
        </div>
      </section>

      <footer>
        foooter
      </footer>
    </div>
  );
}

// Esto solo es prueba despues adaptarlo a mi gusto.
