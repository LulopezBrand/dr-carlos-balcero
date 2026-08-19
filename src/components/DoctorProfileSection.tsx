import React from 'react';
import { motion } from 'framer-motion';
import { Play, Award, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './DoctorProfileSection.css';

export const DoctorProfileSection: React.FC = () => {
  return (
    <section className="profile-section" id="perfil-doctor">
      {/* Background Image & Ambient Overlay */}
      <div className="profile-bg-layer" />
      <div className="profile-overlay-layer" />

      <div className="container profile-container">
        <div className="profile-grid">
          
          {/* Columna Izquierda: Espacio limpio para la figura del Dr. Carlos Balcero */}
          <div className="profile-left-col" aria-hidden="true">
            {/* Espacio reservado para destacar la fotografía del doctor */}
          </div>

          {/* Columna Derecha: Contenido Biográfico, Credenciales y CTAs */}
          <motion.div 
            className="profile-right-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Título Principal al estilo Editorial (Conoce al Dr. Carlos Balcero) */}
            <h2 className="profile-title">
              Conoce al <em>Dr. Carlos Balcero</em>
            </h2>

            {/* Subtítulo Kicker en Acento Dorado */}
            <p className="profile-kicker">
              CIRUJANO PLÁSTICO FACIAL &amp; OTORRINOLARINGÓLOGO
            </p>

            {/* Biografía y Filosofía Quirúrgica */}
            <div className="profile-bio-text">
              <p>
                El <strong>Dr. Carlos Balcero</strong> es especialista en cirugía plástica facial y otorrinolaringología con más de 30 años de experiencia médica. Ha dedicado tres décadas a la formación de nuevas generaciones de especialistas en el <strong>Hospital Universitario de La Samaritana</strong> y el <strong>Hospital Central de la Policía Nacional</strong>.
              </p>
              <p>
                Miembro activo de la <strong>Sociedad Colombiana de Cirugía Plástica Facial</strong>, su enfoque privado combina la más alta precisión reconstructiva con una visión estética atemporal, orientada a resultados indetectables que preservan tu esencia anatómica natural.
              </p>
            </div>

            {/* Fila de Sellos y Credenciales de Autoridad */}
            <div className="profile-credentials-row">
              <div className="profile-cred-item">
                <div className="cred-icon-wrap">
                  <ShieldCheck size={26} strokeWidth={1.4} />
                </div>
                <div className="cred-text">
                  <strong>SCCPFR</strong>
                  <span>Sociedad Colombiana Cirugía Plástica Facial</span>
                </div>
              </div>

              <div className="profile-cred-item">
                <div className="cred-icon-wrap">
                  <GraduationCap size={26} strokeWidth={1.4} />
                </div>
                <div className="cred-text">
                  <strong>DOCENCIA</strong>
                  <span>Hospital Univ. de La Samaritana</span>
                </div>
              </div>

              <div className="profile-cred-item">
                <div className="cred-icon-wrap">
                  <Award size={26} strokeWidth={1.4} />
                </div>
                <div className="cred-text">
                  <strong>30+ AÑOS</strong>
                  <span>Cirujano Formador de Cirujanos</span>
                </div>
              </div>
            </div>

            {/* Acciones: Botón Cápsula + Enlace de Video con Ícono Play */}
            <div className="profile-actions-row">
              <Link to="/quien-soy" className="btn-profile-primary">
                Conoce más sobre mi trayectoria
              </Link>

              <a href="#casos-criterio" className="btn-profile-video">
                <span className="profile-play-circle">
                  <Play size={13} fill="#ffffff" />
                </span>
                <span>Ver Casos en Video</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DoctorProfileSection;
