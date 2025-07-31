
import { Link } from 'react-router-dom';
// import del csss
import "../css/Landing.css"


export default function Landing() {
  return (
    <div className="container py-5">
      {/* Esto es mio */}
      <div className="text-center">
        <h1 className="display-4 fw-bold">!Bienvenido a SkillHub¡</h1>
        <p className="lead">
            ¿Buscas a alguien que diseñe por ti? Tenemos al profesional indicado.
        </p>
        <div className="mt-4">
          <Link to="/login" className="btn btn-primary btn-lg me-3">
            Iniciar Sesión
          </Link>
          <Link to="/registro" className="btn btn-outline-secondary btn-lg">
            Regístrate
          </Link>
        </div>
      </div>

      
        {/* Esto no.. CAMBIAR o ADAPTAR */}
      {/* Sección de beneficios */}
      <div className="row mt-5 text-center">
        <div className="col-md-4">
          <h3>Variedad de Servicios</h3>
          <p>Encuentra desde plomeros hasta programadores.</p>
        </div>
        <div className="col-md-4">
          <h3>Pago Seguro</h3>
          <p>Transacciones protegidas y garantizadas.</p>
        </div>
        <div className="col-md-4">
          <h3>Calificaciones reales</h3>
          <p>Revisa opiniones antes de contratar.</p>
        </div>
      </div>
    </div>
  );
}

// Esto solo es prueba despues adaptarlo a mi gusto.
