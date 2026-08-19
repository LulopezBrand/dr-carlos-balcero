import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ResultsGridSection.css';

interface ResultCard {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  beforeImg: string;
  afterImg: string;
}

const RESULTS_DATA: ResultCard[] = [
  {
    id: 1,
    category: "Rinoplastia & Perfil",
    title: "Rinoplastia y Liposucción de Papada",
    subtitle: "Definición del ángulo cervicofacial y armonización integral del perfil.",
    beforeImg: "/images/rinoplastia-papada-antes.png",
    afterImg: "/images/rinoplastia-papada-despues.png"
  },
  {
    id: 2,
    category: "Rinoplastia Masculina",
    title: "Rinoplastia Masculina",
    subtitle: "Estructura firme que preserva los rasgos y proporciones masculinas.",
    beforeImg: "/images/rinoplastia-masculina-antes.png",
    afterImg: "/images/rinoplastia-masculina-despues.png"
  },
  {
    id: 3,
    category: "Rinoplastia Estructural",
    title: "Rinoplastia Estética y Funcional",
    subtitle: "Corrección anatómica del dorso y punta nasal con respiración óptima.",
    beforeImg: "/images/rinoplastia-estetica-antes.png",
    afterImg: "/images/rinoplastia-estetica-despues.png"
  }
];

// Subcomponente: Slider Interactivo de Antes y Después Cuadrado
const SquareBeforeAfterSlider: React.FC<{ before: string; after: string; title: string }> = ({ before, after, title }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Solo clic primario o toque
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}\n  };\n\n  return (\n    <div \n      className={`sq-ba-container ${isDragging ? 'is-dragging' : ''}`}\n      ref={containerRef}\n      onPointerDown={handlePointerDown}\n      onPointerMove={handlePointerMove}\n      onPointerUp={handlePointerUp}\n      onPointerCancel={handlePointerUp}\n    >\n      {/* Imagen Después (Fondo) */}\n      <img \n        src={after} \n        alt={`Resultado después - ${title}`} \n        className=\"sq-ba-img sq-ba-after\" \n        draggable={false} \n      />\n      <span className=\"sq-ba-badge badge-after\">DESPUÉS</span>\n\n      {/* Imagen Antes (Clipped por el Slider) */}\n      <img \n        src={before} \n        alt={`Resultado antes - ${title}`} \n        className=\"sq-ba-img sq-ba-before\"\n        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}\n        draggable={false}\n      />\n      <span \n        className=\"sq-ba-badge badge-before\"\n        style={{ opacity: sliderPos > 15 ? 1 : 0 }}\n      >\n        ANTES\n      </span>\n\n      {/* Línea Divisoria y Handle */}\n      <div \n        className=\"sq-ba-handle\"\n        style={{ left: `${sliderPos}%` }}\n      >\n        <div className=\"sq-ba-handle-line\" />\n        <div className=\"sq-ba-handle-btn\">\n          <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.5\">\n            <polyline points=\"15 18 9 12 15 6\" />\n          </svg>\n          <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.5\">\n            <polyline points=\"9 18 15 12 9 6\" />\n          </svg>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport const ResultsGridSection: React.FC = () => {\n  return (\n    <section className=\"results-grid-section\" id=\"resultados\">\n      <div className=\"container results-grid-container\">\n        \n        {/* Encabezado Centrado */}\n        <div className=\"results-grid-header\">\n          <div className=\"results-grid-kicker\">\n            <span>GALERÍA CLÍNICA</span>\n          </div>\n          <h2 className=\"results-grid-title\">\n            Conoce nuestros <em>Resultados</em>\n          </h2>\n          <p className=\"results-grid-subtitle\">\n            Casos reales tratados con técnicas quirúrgicas de vanguardia que preservan la armonía y la expresión natural.\n          </p>\n        </div>\n\n        {/* Grilla de 3 Columnas del Mismo Tamaño */}\n        <div className=\"results-three-cols\">\n          {RESULTS_DATA.map((item) => (\n            <div key={item.id} className=\"result-column-card\">\n              \n              {/* Caja Cuadrada con Slider Interactivo */}\n              <div className=\"result-square-box\">\n                <SquareBeforeAfterSlider \n                  before={item.beforeImg} \n                  after={item.afterImg} \n                  title={item.title} \n                />\n              </div>\n\n              {/* Título y Subtítulo Inferior */}\n              <div className=\"result-card-details\">\n                <span className=\"result-card-cat\">{item.category}</span>\n                <h3 className=\"result-card-title\">{item.title}</h3>\n                <p className=\"result-card-subtitle\">{item.subtitle}</p>\n              </div>\n\n            </div>\n          ))}\n        </div>\n\n        {/* CTA Centrado */}\n        <div className=\"results-grid-cta\">\n          <Link to=\"/contacto\" className=\"btn-results-cta\">\n            Quiero agendar una valoración\n          </Link>\n        </div>\n\n      </div>\n    </section>\n  );\n};\n\nexport default ResultsGridSection;\n