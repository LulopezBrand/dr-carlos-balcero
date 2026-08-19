import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalScroll from '../components/HorizontalScroll';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section Fullscreen con Imagen Horizontal de Fondo */}
      <section className="internal-hero">
        <div className="internal-hero-bg">
          <img 
            src="/images/dr_balcero_horizontal.png" 
            alt="Dr. Carlos Balcero Cirujano Plástico Facial" 
            className="internal-hero-img" 
          />
          <div className="internal-hero-overlay" />
        </div>

        <div className="container internal-hero-container">
          <motion.div 
            className="internal-hero-center-box"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="internal-hero-pill">
              <span>TRAYECTORIA Y FILOSOFÍA</span>
            </div>

            <h1 className="internal-hero-title">
              El tiempo y la dedicación que tu rostro merece.
            </h1>

            <p className="internal-hero-subtitle">
              Conoce la trayectoria y filosofía del Dr. Carlos Balcero, un refugio para la excelencia clínica, la ética quirúrgica y el trato humano sin prisas.
            </p>
          </motion.div>
        </div>

        <div className="internal-hero-scroll-indicator">
          <span>Explorar</span>
          <div className="internal-hero-scroll-line" />
        </div>
      </section>

      {/* Main Story Content */}
      <section className="story-section">
        <div className="container">
          <div className="grid grid-2 story-grid">
            <div className="story-image">
              <img 
                src="/images/dr_balcero_bata.png" 
                alt="Dr. Carlos Balcero Cirujano Plástico Facial" 
                className="story-main-img" 
              />
            </div>
            <div className="story-content">
              <h2>Más de 30 años buscando la verdad anatómica.</h2>
              <p>
                A lo largo de mi trayectoria médica como otorrinolaringólogo y cirujano plástico facial, me formé en el rigor de las instituciones hospitalarias más exigentes del país. Allí, frente a los casos más complejos y en las aulas formando a nuevos especialistas, comprendí algo fundamental: <strong>la verdadera cirugía no se trata de transformar un rostro, sino de entenderlo profundamente.</strong>
              </p>
              
              <h3>El valor del tiempo</h3>
              <p>
                Decidí dejar atrás la práctica institucional masiva y el volumen clínico por una razón muy poderosa: tú. En la medicina institucional, el reloj dicta el ritmo. En mi práctica privada, el único ritmo que seguimos es el del respeto absoluto por ti y tu bienestar.
              </p>
              <p>
                Me independicé no para operar a más personas, sino para poder escucharte sin prisas, evaluar cada milímetro de tu anatomía con paciencia y dedicarte el nivel de excelencia y ética que mereces.
              </p>
              
              <div className="story-quote">
                "La maestría quirúrgica no se demuestra por lo que el cirujano es capaz de transformar, sino por lo que tiene el criterio de respetar."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Reflexiones & Temas Clave (Horizontal Scroll) */}
      <HorizontalScroll />

      {/* Credentials */}
      <section className="credentials-section section-padding">
        <div className="container">
          <div className="credentials-header">
            <h2>Un legado de conocimiento y confianza.</h2>
          </div>
          <div className="grid grid-3 credentials-grid">
            <div className="credential-card">
              <h3>Docencia y Formación</h3>
              <p>Años de vocación como profesor universitario (Hospital de la Samaritana, Policía Nacional), transmitiendo el rigor ético y la precisión técnica a las nuevas generaciones de cirujanos en Colombia.</p>
            </div>
            <div className="credential-card">
              <h3>El Cirujano de Cirujanos</h3>
              <p>Un historial de apoyo constante a colegas y especialistas que confían en mi criterio para guiarlos en los casos estéticos y reconstructivos de mayor complejidad.</p>
            </div>
            <div className="credential-card">
              <h3>Resultados Atemporales</h3>
              <p>Cientos de pacientes satisfechos a lo largo de las décadas, demostrando que una intervención respetuosa y natural sigue viéndose bella y armónica incluso 15 años después.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section-padding">
        <div className="container cta-container">
          <h2>Déjame escuchar tu historia.</h2>
          <p>Estoy aquí para brindarte una opinión honesta, cálida y altamente especializada sobre lo que realmente necesitas.</p>
          <Link to="/contacto" className="btn btn-primary">
            Agendar una cita conmigo <ArrowRight size={18} style={{ marginLeft: '10px' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
