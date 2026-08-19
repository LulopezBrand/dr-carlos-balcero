import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import './ContactMapSection.css';

export const ContactMapSection: React.FC = () => {
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Calle+83+%23+19-36+Bogota+Colombia";
  const embedUrl = "https://maps.google.com/maps?q=Calle%2083%20%23%2019-36%20Bogota%20Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="contact-map-section">
      <div className="container contact-map-header">
        <span className="contact-map-kicker">UBICACIÓN EXCLUSIVA</span>
        <h2 className="contact-map-title">
          Consultorio Privado <em>El Country</em>
        </h2>
        <p className="contact-map-subtitle">
          Ubicado en uno de los sectores médicos más prestigiosos y seguros de Bogotá, diseñado para brindarte máxima privacidad y confort.
        </p>
      </div>

      <div className="container contact-map-wrapper">
        <div className="map-iframe-container">
          <iframe 
            title="Ubicación Consultorio Dr. Carlos Balcero"
            src={embedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Card flotante de ubicación */}
        <div className="contact-map-card">
          <div className="map-card-badge">
            <span>SEDE PRINCIPAL</span>
          </div>

          <h3 className="map-card-heading">Dr. Carlos Balcero</h3>

          <div className="map-card-item">
            <MapPin size={18} className="map-card-icon" />
            <div>
              <strong>Dirección</strong>
              <p>Calle 83 Nº 19-36, Oficina 503<br />Barrio El Country, Bogotá — Colombia</p>
            </div>
          </div>

          <div className="map-card-item">
            <Clock size={18} className="map-card-icon" />
            <div>
              <strong>Horarios de Atención</strong>
              <p>Lunes a Viernes: 8:00 AM – 5:00 PM<br /><em>(Exclusivamente con cita previa)</em></p>
            </div>
          </div>

          <div className="map-card-action">
            <a 
              href={mapSearchUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-map-directions"
            >
              <Navigation size={15} style={{ marginRight: '8px' }} /> Cómo llegar en Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
