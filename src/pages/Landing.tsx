
import { Link } from 'react-router-dom';
// import del css
// import "../css/Landing.css";
// import de las imagenes
import skillhub from "../assets/Image_Skillhub.png";


export default function Landing() {
  return (
    <>
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
      
      {/* Sección de beneficios */}
      <section className="section2 row mt-5 text-center">
        <div className="beneficios col-md-4">
          <h3>Variedad de Servicios</h3>
            <i className='bx bxs-check-shield icon2'>
              <p className="Text">Encuentra desde plomeros hasta programadores.</p>
            </i>
        </div>
        <div className="beneficios col-md-4">
          <h3>Pago Seguro</h3>
            <i className='bx bxs-credit-card icon2'>
              <p className="Text">Transacciones protegidas y garantizadas.</p>
            </i>
        </div>
        <div className="beneficios col-md-4">
          <h3>Calificaciones reales</h3>
            <i className='bx bxs-star-half icon2'>
              <p className="Text">Revisa opiniones antes de contratar.</p>
            </i>
        </div>
      </section>
      
    </div>
    {/* Redes sociales */}
    <footer className="footer">
        <div className="webs">
          {/* GITHUB */}
          <a href="https://github.com/REDMAN8883" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github icon3'>
              <p>Github</p>
            </i>
          </a>
          {/* LINKEDIN */}
          <a href="" target='_blank' rel="noopener noreferrer">
            <i className='bx bxl-linkedin icon3' >
              <p>Linkedin</p>
            </i>
          </a>
          {/* DISCORD */}
          <a href="https://discord.com/channels/828341060320755733/828341871695626290" target='_blank' rel="noopener noreferrer">
            <i className='bx bxl-discord icon3' >
              <p>Discord</p>            
            </i>
          </a>
          {/* GMAIL */}
          <a href="mailto:julianbeltran081@gmail.com" target='_blank' rel="noopener noreferrer">
            <i className='bx bxl-gmail icon3' >
              <p>Gmail</p>
            </i>
          </a>
          {/* WHATSAPP */}
          <a href="https://wa.me/3226600792" target='_blank' rel="noopener noreferrer">
            <i className='bx bxl-whatsapp-square icon3' >
              <p>Whatsapp</p>
            </i>
          </a>
        </div>
      </footer>
    </>
  );
}

// Esto solo es prueba despues adaptarlo a mi gusto.
