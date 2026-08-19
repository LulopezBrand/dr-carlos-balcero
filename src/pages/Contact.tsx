import { motion } from 'framer-motion';
import { PreFooterForm } from '../components/PreFooterForm';
import { ContactMapSection } from '../components/ContactMapSection';
import { ContactFAQSection } from '../components/ContactFAQSection';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* 1. Hero Section Fullscreen con Imagen Horizontal de Fondo */}
      <section className="internal-hero">
        <div className="internal-hero-bg">
          <img 
            src="/images/horizontal_medico_lupas_1787016540321.jpg" 
            alt="Consultorio Dr. Carlos Balcero" 
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
              <span>CONSULTORIO PRIVADO · BOGOTÁ</span>
            </div>

            <h1 className="internal-hero-title">
              Hablemos de tu caso.
            </h1>

            <p className="internal-hero-subtitle">
              La medicina de excelencia requiere tiempo y atención. Solo atendemos con cita previa estructurada para garantizar que tu diagnóstico sea exhaustivo y honesto.
            </p>
          </motion.div>
        </div>

        <div className="internal-hero-scroll-indicator">
          <span>Explorar</span>
          <div className="internal-hero-scroll-line" />
        </div>
      </section>

      {/* 2. Formulario e Información de Contacto sobre Fondo Claro (Con espaciado amplio) */}
      <PreFooterForm variant="light" />

      {/* 3. Sección Mapa Interactivo Google Maps + Card de Ubicación */}
      <ContactMapSection />

      {/* 4. Sección Preguntas Frecuentes (FAQ Accordion) */}
      <ContactFAQSection />
    </div>
  );
};

export default Contact;
