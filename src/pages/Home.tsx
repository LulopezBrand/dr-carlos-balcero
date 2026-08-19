import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PhilosophyParallax from '../components/PhilosophyParallax';
import DoctorProfileSection from '../components/DoctorProfileSection';
import VideoShowcaseSlider from '../components/VideoShowcaseSlider';
import { ProcessStepsSection } from '../components/ProcessStepsSection';
import TestimonialMarquee from '../components/TestimonialMarquee';
import ServicesStickySlideshow from '../components/ServicesStickySlideshow';
import ResultsGridSection from '../components/ResultsGridSection';
import PreFooterForm from '../components/PreFooterForm';
import './Home.css';

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Safe catch for autoplay restrictions
      });
    }
  }, []);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            src="/videos/hero.mp4"
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="hero-video-fallback" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-container">
          <motion.div 
            className="hero-center-box"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-status-pill">
              <span className="status-dot" />
              <span>30 AÑOS DE MAESTRÍA CLÍNICA Y VOCACIÓN DOCENTE</span>
            </div>

            <h1 className="hero-title">
              Cirugía plástica facial que respeta y exalta quién eres.
            </h1>

            <p className="hero-subtitle">
              Diseñamos planes quirúrgicos exclusivos basados en tus facciones naturales. Para quienes buscan resultados indetectables y desean recuperar la confianza en su propia imagen.
            </p>

            <div className="hero-actions">
              <a href="#agendar" className="btn-hero-primary">
                Conversemos sobre tu caso <ArrowRight size={15} style={{ marginLeft: '6px' }} />
              </a>
              <a href="#filosofia" className="btn-hero-link">
                Cómo es el proceso
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Explorar</span>
          <div className="hero-scroll-line" />
        </div>

        <div className="hero-bottom-bar">
          <div className="container hero-bottom-container">
            <div className="bottom-label">
              ENFOQUE CLÍNICO DE ALTA COMPLEJIDAD
            </div>
            <div className="bottom-partners">
              <span>Associate Member of the American Academy of Otolaryngology-Head and Neck Surgery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Parallax */}
      <div id="filosofia">
        <PhilosophyParallax />
      </div>

      {/* 3. Doctor Profile Section */}
      <DoctorProfileSection />

      {/* 4. Video Showcase Slider (Casos & Criterio) */}
      <div id="casos-criterio">
        <VideoShowcaseSlider />
      </div>

      {/* 5. El Proceso (Sticky Steps) */}
      <ProcessStepsSection />

      {/* 6. Testimonial Marquee */}
      <TestimonialMarquee />

      {/* 7. Services Sticky Slideshow (Nuestra Expertise) */}
      <ServicesStickySlideshow />
      
      {/* 8. Conoce Nuestros Resultados (Grilla de 3 Columnas Cuadradas) */}
      <ResultsGridSection />

      {/* 9. Pre-Footer Mini Form */}
      <div id="agendar">
        <PreFooterForm />
      </div>
    </div>
  );
};

export default Home;
