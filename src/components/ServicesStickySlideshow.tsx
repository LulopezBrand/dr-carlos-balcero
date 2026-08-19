import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesStickySlideshow.css';

const services = [
  {
    id: 1,
    title: "Rinoplastia Estética y Funcional",
    desc: "Armonía integral que respeta tu anatomía. Combinamos la máxima precisión estética con la corrección funcional para una respiración perfecta.",
    img: "/images/expertise-rinoplastia-estetica.png",
    ctaText: "Descubre tu armonía nasal",
    ctaLink: "/contacto"
  },
  {
    id: 2,
    title: "Rejuvenecimiento Facial Avanzado",
    desc: "Lifting y blefaroplastia con técnicas profundas. Devolvemos la frescura a tu rostro logrando un aspecto descansado sin alterar tu expresión natural.",
    img: "/images/expertise-rejuvenecimiento-facial.jpg",
    ctaText: "Recupera tu frescura natural",
    ctaLink: "/contacto"
  },
  {
    id: 3,
    title: "Armonización No Quirúrgica",
    desc: "Procedimientos mínimamente invasivos con bioestimuladores para revitalizar tu piel y definir contornos con resultados totalmente indetectables.",
    img: "/images/expertise-armonizacion-facial.jpg",
    ctaText: "Revitaliza tus rasgos sin cirugía",
    ctaLink: "/contacto"
  },
  {
    id: 4,
    title: "Ultherapy · Ultrasonido Focalizado",
    desc: "Tecnología no invasiva de última generación que estimula la producción profunda de colágeno, logrando un efecto lifting natural y firmeza progresiva sin tiempo de incapacidad.",
    img: "/images/expertise-ultherapy-lifting.jpg",
    ctaText: "Efecto lifting sin incapacidad",
    ctaLink: "/contacto"
  },
  {
    id: 5,
    title: "Otorrinolaringología Clínica",
    desc: "Manejo avanzado de patologías funcionales, respaldado por más de 30 años de experiencia clínica y docente de alta complejidad.",
    img: "/images/expertise-otorrinolaringologia.jpg",
    ctaText: "Respira con total libertad",
    ctaLink: "/contacto"
  }
];

export const ServicesStickySlideshow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * services.length);
    if (index >= services.length) index = services.length - 1;
    if (index < 0) index = 0;
    
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeService = services[activeIndex];

  return (
    <div className="sticky-slideshow-container" ref={containerRef}>
      <div className="sticky-slideshow-pinned">
        <div className="sticky-slideshow-inner container">
          
          {/* Título Global Centrado */}
          <div className="slideshow-global-header">
            <div className="slideshow-global-kicker">
              <span>Nuestra Expertise</span>
            </div>
            <h2 className="slideshow-global-title">
              Procedimientos <em>Especializados</em>
            </h2>
          </div>

          <div className="slideshow-grid">
            
            {/* Left Col: Title & Counter */}
            <div className="slideshow-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeService.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="slideshow-title">{activeService.title}</h2>
                </motion.div>
              </AnimatePresence>
              <div className="slideshow-counter-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '2rem' }}>
                <div className="slideshow-progress-bar" style={{ width: '2px', height: '60px', backgroundColor: 'rgba(10, 25, 47, 0.1)', position: 'relative' }}>
                  <motion.div 
                    className="slideshow-progress-fill"
                    style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      width: '100%', 
                      backgroundColor: 'var(--color-primary)', 
                      height: `${((activeIndex + 1) / services.length) * 100}%`,
                      transition: 'height 0.3s ease'
                    }} 
                  />
                </div>
                <div className="slideshow-counter" style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--palette-1)' }}>
                  0{activeService.id} <span style={{ fontSize: '14px', color: '#888' }}>/ 0{services.length}</span>
                </div>
              </div>
            </div>

            {/* Center Col: Image */}
            <div className="slideshow-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  className="slideshow-img-wrapper"
                  key={`img-${activeService.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <img src={activeService.img} alt={activeService.title} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Col: Description & Animated Outline CTA */}
            <div className="slideshow-right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${activeService.id}`}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.4 }}
                  className="slideshow-right-inner"
                >
                  <p className="slideshow-desc">{activeService.desc}</p>
                  
                  <div className="slideshow-action">
                    <Link to={activeService.ctaLink} className="btn-slideshow-outline">
                      {activeService.ctaText} <ArrowRight size={15} style={{ marginLeft: '8px' }} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesStickySlideshow;
