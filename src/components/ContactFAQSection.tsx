import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './ContactFAQSection.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "¿Cómo solicito una cita de valoración con el Dr. Carlos Balcero?",
    answer: "Puedes completar el formulario de esta página o escribirnos directamente a nuestro WhatsApp oficial (+57 315 335 2686). Nuestro equipo asistencial evaluará tu solicitud y te ofrecerá los horarios disponibles en el Consultorio Privado Sede El Country."
  },
  {
    id: 2,
    question: "¿Es posible realizar la valoración de manera virtual si resido fuera de Bogotá o en el exterior?",
    answer: "Sí. Para pacientes internacionales o de otras ciudades de Colombia, disponemos de consultas virtuales estructuradas. Durante la videollamada, el Dr. Balcero analizará tus fotografías clínicas, antecedentes y expectativas con la misma rigurosidad que en una cita presencial."
  },
  {
    id: 3,
    question: "¿Por qué no entregan cotizaciones o presupuestos antes de la valoración?",
    answer: "Cada rostro y estructura anatómica es absolutamente única. El Dr. Carlos Balcero no trabaja con procedimientos estándar ni paquetes comerciales. La tarifa exacta depende de la complejidad técnica, la anatomía interna y el plan quirúrgico o estético que se defina únicamente en la consulta médica."
  },
  {
    id: 4,
    question: "¿Cuál es el tiempo promedio de recuperación para una Rinoplastia o Rejuvenecimiento Facial?",
    answer: "Para la Rinoplastia, la inflamación inicial disminuye significativamente entre los 7 y 10 días, permitiendo retomar actividades laborales normales. En procedimientos de Rejuvenecimiento Facial o Lifting, el tiempo de reintegración social suele ser de 10 a 14 días. Todos los detalles específicos se analizan según tu caso."
  },
  {
    id: 5,
    question: "¿Con cuánta anticipación se recomienda agendar la consulta de primera vez?",
    answer: "Debido a la dedicación personalizada y al tiempo asignado a cada paciente (mínimo 45 minutos por consulta), recomendamos agendar con 2 a 3 semanas de anticipación, especialmente para citas presenciales o fechas cercanas a viajes."
  }
];

export const ContactFAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="contact-faq-section">
      <div className="container">
        <div className="contact-faq-header">
          <span className="faq-kicker">RESOLVEMOS TUS DUDAS</span>
          <h2 className="faq-title">
            Preguntas <em>Frecuentes</em>
          </h2>
          <p className="faq-subtitle">
            Transparencia y claridad desde el primer momento para que inicies tu proceso con total tranquilidad.
          </p>
        </div>

        <div className="faq-accordion-wrapper">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
              >
                <button 
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon-toggle">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-content">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQSection;
