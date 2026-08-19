import React, { useState } from 'react';
import './PreFooterForm.css';

interface PreFooterFormProps {
  variant?: 'dark' | 'light';
}

export const PreFooterForm: React.FC<PreFooterFormProps> = ({ variant = 'dark' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    procedures: [] as string[],
    wantsConsultation: false,
    agreesPolicy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleProcedure = (proc: string) => {
    setFormData(prev => {
      const exists = prev.procedures.includes(proc);
      return {
        ...prev,
        procedures: exists 
          ? prev.procedures.filter(p => p !== proc)
          : [...prev.procedures, proc]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isLight = variant === 'light';

  return (
    <section className={`dark-prefooter-section ${isLight ? 'is-light-theme' : ''}`} id="agendar">
      <div className="dark-prefooter-ambient" />
      
      <div className="container dark-prefooter-container">
        
        {/* Columna Izquierda: Gran Titular Editorial y Contacto */}
        <div className="dark-prefooter-left">
          <h2 className="dark-prefooter-title">
            HABLEMOS DE<br />
            TU CASO Y<br />
            <em>TU VISIÓN</em>
          </h2>

          <div className="dark-prefooter-contact-info">
            <span className="dark-info-label">CONSULTORIO PRIVADO · BOGOTÁ</span>
            <p className="dark-info-primary">consultas@drcarlosbalcero.com</p>
            <p className="dark-info-primary">+57 315 335 2686</p>
            <p className="dark-info-address">Calle 83 Nº 19-36, Oficina 503, B/ El Country · Bogotá, Colombia</p>
            
            <div className="dark-info-links">
              <a href="https://wa.me/573153352686" target="_blank" rel="noopener noreferrer" className="dark-link-pill">
                WhatsApp Directo ↗
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="dark-link-pill">
                Instagram ↗
              </a>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario Minimalista */}
        <div className="dark-prefooter-right">
          {submitted ? (\n            <div className=\"dark-form-success\">\n              <h3>¡Solicitud Recibida!</h3>\n              <p>Gracias por tu confianza, <strong>{formData.name}</strong>. Nuestro equipo se comunicará contigo en breve para coordinar tu valoración personalizada.</p>\n              <button \n                type=\"button\" \n                className=\"btn-dark-submit\" \n                onClick={() => setSubmitted(false)}\n                style={{ marginTop: '20px' }}\n              >\n                Enviar otra consulta\n              </button>\n            </div>\n          ) : (\n            <form className=\"dark-prefooter-form\" onSubmit={handleSubmit}>\n              \n              {/* Fila 1: Nombre y Email */}\n              <div className=\"dark-form-row\">\n                <div className=\"dark-form-group\">\n                  <label htmlFor=\"dpf-name\">NOMBRE COMPLETO*</label>\n                  <input \n                    type=\"text\" \n                    id=\"dpf-name\" \n                    required \n                    placeholder=\"Tu nombre y apellido\"\n                    value={formData.name}\n                    onChange={e => setFormData({...formData, name: e.target.value})}\n                  />\n                </div>\n\n                <div className=\"dark-form-group\">\n                  <label htmlFor=\"dpf-email\">CORREO ELECTRÓNICO*</label>\n                  <input \n                    type=\"email\" \n                    id=\"dpf-email\" \n                    required \n                    placeholder=\"ejemplo@correo.com\"\n                    value={formData.email}\n                    onChange={e => setFormData({...formData, email: e.target.value})}\n                  />\n                </div>\n              </div>\n\n              {/* Fila 2: Teléfono / WhatsApp */}\n              <div className=\"dark-form-group\">\n                <label htmlFor=\"dpf-phone\">TELÉFONO / WHATSAPP*</label>\n                <input \n                  type=\"tel\" \n                  id=\"dpf-phone\" \n                  required \n                  placeholder=\"+57 315 335 2686\"\n                  value={formData.phone}\n                  onChange={e => setFormData({...formData, phone: e.target.value})}\n                />\n              </div>\n\n              {/* Fila 3: Procedimientos de Interés */}\n              <div className=\"dark-form-group-checkboxes\">\n                <label className=\"dark-group-label\">¿QUÉ PROCEDIMIENTO TE INTERESA EXPLORAR?</label>\n                <div className=\"dark-checkbox-grid\">\n                  {[\n                    \"Rinoplastia Estética y Funcional\",\n                    \"Rejuvenecimiento Facial (Lifting / Párpados)\",\n                    \"Armonización No Quirúrgica\",\n                    \"Otorrinolaringología Clínica\"\n                  ].map((proc) => {\n                    const isChecked = formData.procedures.includes(proc);\n                    return (\n                      <label key={proc} className={`dark-checkbox-item ${isChecked ? 'is-checked' : ''}`}>\n                        <input \n                          type=\"checkbox\" \n                          checked={isChecked}\n                          onChange={() => toggleProcedure(proc)}\n                        />\n                        <span className=\"custom-checkbox\"></span>\n                        <span className=\"checkbox-text\">{proc}</span>\n                      </label>\n                    );\n                  })}\n                </div>\n              </div>\n\n              {/* Fila 4: Confirmaciones Legales */}\n              <div className=\"dark-form-agreements\">\n                <label className=\"dark-checkbox-item agreement-item\">\n                  <input \n                    type=\"checkbox\" \n                    checked={formData.wantsConsultation}\n                    onChange={e => setFormData({...formData, wantsConsultation: e.target.checked})}\n                  />\n                  <span className=\"custom-checkbox\"></span>\n                  <span className=\"checkbox-text\">Deseo agendar una consulta de valoración presencial o virtual</span>\n                </label>\n\n                <label className=\"dark-checkbox-item agreement-item\">\n                  <input \n                    type=\"checkbox\" \n                    required\n                    checked={formData.agreesPolicy}\n                    onChange={e => setFormData({...formData, agreesPolicy: e.target.checked})}\n                  />\n                  <span className=\"custom-checkbox\"></span>\n                  <span className=\"checkbox-text\">Acepto la Política de Tratamiento de Datos Personales</span>\n                </label>\n              </div>\n\n              {/* Botón de Envío */}\n              <div className=\"dark-form-actions\">\n                <button type=\"submit\" className=\"btn-dark-submit\">\n                  ENVIAR SOLICITUD &nbsp;→\n                </button>\n              </div>\n\n            </form>\n          )}\n        </div>\n\n      </div>\n    </section>\n  );\n};\n\nexport default PreFooterForm;\n