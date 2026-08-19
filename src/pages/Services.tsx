import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section Fullscreen con Imagen Horizontal de Fondo */}
      <section className="internal-hero">
        <div className="internal-hero-bg">
          <img 
            src="/images/horizontal_mujer_40_1787016547686.jpg" 
            alt="Procedimientos Especializados Dr. Carlos Balcero" 
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
              <span>PROCEDIMIENTOS ESPECIALIZADOS</span>
            </div>

            <h1 className="internal-hero-title">
              Un plan médico, no un catálogo.
            </h1>

            <p className="internal-hero-subtitle">
              Cada intervención es dictada por tus necesidades anatómicas y estéticas, no por tendencias. A través de un diagnóstico clínico preciso, determinamos el procedimiento exacto para devolverle la armonía a tu rostro.
            </p>
          </motion.div>
        </div>

        <div className="internal-hero-scroll-indicator">
          <span>Explorar</span>
          <div className="internal-hero-scroll-line" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list-section">
        <div className="container">
          
          {/* Service Area 1 */}
          <div className="service-area">
            <div className="service-area-info">
              <h2>Rejuvenecimiento Estructural</h2>
              <p>Devolvemos la vitalidad a tu rostro tratando las causas profundas del envejecimiento, preservando siempre tu identidad y expresión natural.</p>
              
              <ul className="service-items">
                <li>
                  <strong>Blefaroplastia (Cirugía de Párpados)</strong>
                  Eliminamos el aspecto de fatiga crónica respetando la forma original de tu mirada.
                </li>
                <li>
                  <strong>Ritidoplastia (Lifting Facial)</strong>
                  Reposicionamiento anatómico de los tejidos profundos para un resultado duradero e indetectable.
                </li>
                <li>
                  <strong>Elevación de Cejas (Frontoplastia)</strong>
                  Suavizamos la expresión del tercio superior del rostro sin alterar tu gesto característico.
                </li>
              </ul>
            </div>
            <div className="service-area-image">
              <img 
                src="/images/ultherapy_rostro_55_1787017949370.jpg" 
                alt="Rejuvenecimiento Estructural Dr. Carlos Balcero" 
                className="service-img"
              />
            </div>
          </div>

          {/* Service Area 2 */}
          <div className="service-area reverse">
            <div className="service-area-info">
              <h2>Armonización y Proporción</h2>
              <p>Equilibramos las estructuras de tu rostro con precisión milimétrica, logrando que ninguna facción compita con la otra.</p>
              
              <ul className="service-items">
                <li>
                  <strong>Rinoplastia Estructural</strong>
                  Más que reducir, estructuramos tu nariz para que se integre perfectamente con tus rasgos naturales y mejore tu función respiratoria.
                </li>
                <li>
                  <strong>Mentoplastia (Cirugía de Mentón)</strong>
                  Aportamos balance al perfil facial ajustando el tercio inferior del rostro.
                </li>
                <li>
                  <strong>Otoplastia (Cirugía de Orejas)</strong>
                  Corrección anatómica sutil para brindar confianza y armonía.
                </li>
              </ul>
            </div>
            <div className="service-area-image">
              <img 
                src="/images/balcero_visual_2_1786850387803.jpg" 
                alt="Armonización Facial Dr. Carlos Balcero" 
                className="service-img"
              />
            </div>
          </div>

          {/* Service Area 3 */}
          <div className="service-area">
            <div className="service-area-info">
              <h2>Otorrinolaringología y Función</h2>
              <p>Tratamiento de alta complejidad para patologías nasosinusales y respiratorias, combinando salud funcional con excelencia estética.</p>
              
              <ul className="service-items">
                <li>
                  <strong>Septoplastia Funcional</strong>
                  Corrección de desviaciones septales para restaurar el flujo de aire nasal óptimo.
                </li>
                <li>
                  <strong>Turbinoplastia</strong>
                  Manejo de cornetes hipertróficos para aliviar la obstrucción crónica.
                </li>
                <li>
                  <strong>Cirugía Reconstructiva de Trauma</strong>
                  Reconstrucción de secuelas de traumatismos nasales con enfoque integral.
                </li>
              </ul>
            </div>
            <div className="service-area-image">
              <img 
                src="/images/vertical_medico_lupas_1787016562377.jpg" 
                alt="Otorrinolaringología Clínica Dr. Carlos Balcero" 
                className="service-img"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Galería de Resultados (Antes y Después en Acordeón) */}
      <BeforeAfterGallery />

      {/* Philosophy Box */}
      <section className="philosophy-section section-padding">
        <div className="container">
          <div className="philosophy-box">
            <h2>El diagnóstico lo es todo.</h2>
            <p>
              Durante tu primera consulta, no nos limitaremos a escuchar qué procedimiento deseas. Estudiaremos la arquitectura de tu rostro, evaluaremos la viabilidad clínica y te trazaremos la ruta exacta (quirúrgica o no quirúrgica) que tu anatomía realmente requiere para alcanzar el resultado que esperas.
            </p>
            <Link to="/contacto" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Solicitar diagnóstico personalizado <ArrowRight size={18} style={{ marginLeft: '10px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
