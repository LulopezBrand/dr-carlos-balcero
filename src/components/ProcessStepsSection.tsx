import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import './ProcessStepsSection.css';

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Consulta de Valoración",
    desc: "Un diálogo honesto de 45 minutos para entender tus objetivos, evaluar tu anatomía tridimensionalmente y trazar las posibilidades reales de tu caso.",
    img: "/images/proceso-01-consulta-valoracion.jpg"
  },
  {
    id: 2,
    number: "02",
    title: "Diseño del Protocolo",
    desc: "El Dr. Carlos Balcero elabora un plan quirúrgico o estético milimétrico. No hay plantillas genéricas; cada técnica y volumen se personaliza para tu fisionomía.",
    img: "/images/proceso-02-diseno-protocolo.jpg"
  },
  {
    id: 3,
    number: "03",
    title: "Ejecución y Acompañamiento",
    desc: "Desde tu ingreso a la clínica hasta el alta definitiva, nuestro equipo médico monitorea tu evolución para garantizar un postoperatorio tranquilo y resultados impecables.",
    img: "/images/proceso-03-ejecucion-acompanamiento.jpg"
  }
];

export const ProcessStepsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 3 sections for 3 steps
    let index = Math.floor(latest * processSteps.length);
    if (index >= processSteps.length) index = processSteps.length - 1;
    if (index < 0) index = 0;
    
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <div className="process-section-wrapper" ref={containerRef}>
      <div className="process-sticky-container">
        
        {/* Encabezado Superior */}
        <div className="process-header">
          <div className="process-kicker">
            <span>El Proceso</span>
          </div>
          <h2 className="process-title">
            Tu transformación, <em>paso a paso</em>
          </h2>
          <p className="process-subtitle">
            Acompañamiento médico integral basado en ciencia, diagnóstico preciso y atención humana de primer nivel.
          </p>
        </div>

        <div className="process-layout">
          {/* Columna Izquierda: Imagen */}
          <div className="process-image-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="process-image-box"
              >
                <img 
                  src={processSteps[activeIndex].img} 
                  alt={processSteps[activeIndex].title} 
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Columna Derecha: Pasos Acumulativos */}
          <div className="process-steps-col">
            {processSteps.map((step, idx) => {
              const isRevealed = idx <= activeIndex;
              return (
                <div 
                  key={step.id} 
                  className={`process-step-item ${isRevealed ? 'is-active' : ''}`}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
