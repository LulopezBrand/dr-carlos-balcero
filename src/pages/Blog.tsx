import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "La verdad anatómica detrás de una rinoplastia exitosa",
      excerpt: "Comprender la estructura interna de la nariz es el primer paso para lograr un resultado que respete tu esencia...",
      date: "Octubre 15, 2026",
      category: "Armonización Facial",
      img: "/images/balcero_visual_1_1786850378289.jpg"
    },
    {
      id: 2,
      title: "¿Cuándo es el momento adecuado para un Lifting Facial?",
      excerpt: "No existe una edad perfecta, existe un momento estructural adecuado. Analizamos los indicadores médicos que sugieren...",
      date: "Septiembre 28, 2026",
      category: "Rejuvenecimiento Estructural",
      img: "/images/ultherapy_rostro_60_1787017957831.jpg"
    },
    {
      id: 3,
      title: "El peligro del mercantilismo estético",
      excerpt: "Cómo las tendencias y la presión social están desdibujando la línea entre la necesidad médica y la complacencia comercial...",
      date: "Septiembre 10, 2026",
      category: "Filosofía Médica",
      img: "/images/dr_balcero_horizontal.png"
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section Fullscreen con Imagen Horizontal de Fondo */}
      <section className="internal-hero">
        <div className="internal-hero-bg">
          <img 
            src="/images/horizontal_mujer_20_1787016530671.jpg" 
            alt="Casos y Visión Clínica Dr. Carlos Balcero" 
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
              <span>CRITERIO QUIRÚRGICO Y ÉTICA MÉDICA</span>
            </div>

            <h1 className="internal-hero-title">
              Casos, Criterio y Perspectiva.
            </h1>

            <p className="internal-hero-subtitle">
              Reflexiones profundas, fundamentos anatómicos y criterios éticos que guían cada decisión en el quirófano y la consulta privada.
            </p>
          </motion.div>
        </div>

        <div className="internal-hero-scroll-indicator">
          <span>Explorar</span>
          <div className="internal-hero-scroll-line" />
        </div>
      </section>

      <section className="blog-list-section section-padding">
        <div className="container">
          <div className="grid grid-3 blog-grid">
            {posts.map(post => (\n              <div key={post.id} className=\"blog-card\">\n                <div className=\"blog-card-image\">\n                  <img src={post.img} alt={post.title} className=\"blog-img\" />\n                </div>\n                <div className=\"blog-card-content\">\n                  <span className=\"blog-category\">{post.category}</span>\n                  <h3>{post.title}</h3>\n                  <p>{post.excerpt}</p>\n                  <div className=\"blog-meta\">\n                    <span>{post.date}</span>\n                    <Link to={`/blog/${post.id}`} className=\"blog-read-more\">Leer artículo</Link>\n                  </div>\n                </div>\n              </div>\n            ))}\n          </div>\n        </div>\n      </section>\n    </div>\n  );\n};\n\nexport default Blog;\n