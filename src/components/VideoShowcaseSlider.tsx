import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import './VideoShowcaseSlider.css';

interface ShowcaseVideo {
  id: string;
  originalIndex: number;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  videoSrc: string;
  gradient: string;
}

const INITIAL_VIDEOS: ShowcaseVideo[] = [
  {
    id: '01',
    originalIndex: 0,
    number: '01',
    tag: 'Verdad Anatómica',
    title: 'Transformación sin perder tu esencia',
    subtitle: 'Resultados indetectables que respetan tus medidas antropométricas y edad.',
    videoSrc: '/videos/Video001.mp4',
    gradient: 'linear-gradient(145deg, #0A192F, #1E3A5F)'
  },
  {
    id: '02',
    originalIndex: 1,
    number: '02',
    tag: 'Ética Quirúrgica',
    title: 'El criterio del "NO"',
    subtitle: 'Por qué decirle a un paciente cuándo no intervenir es nuestra mayor garantía.',
    videoSrc: '/videos/Video002.mp4',
    gradient: 'linear-gradient(145deg, #0D213F, #16365C)'
  },
  {
    id: '03',
    originalIndex: 2,
    number: '03',
    tag: 'Mirada Atemporal',
    title: 'Rejuvenecimiento de párpados',
    subtitle: 'Alivio del aspecto de cansancio crónico devolviendo luz natural a tu mirada.',
    videoSrc: '/videos/Video003.mp4',
    gradient: 'linear-gradient(145deg, #102A45, #1B395E)'
  },
  {
    id: '04',
    originalIndex: 3,
    number: '04',
    tag: 'Perfiloplastia',
    title: 'Rinoplastia y armonía facial',
    subtitle: 'Estructura milimétrica respetando el equilibrio y la salud respiratoria.',
    videoSrc: '/videos/Video004.mp4',
    gradient: 'linear-gradient(145deg, #0A192F, #1C385C)'
  },
  {
    id: '05',
    originalIndex: 4,
    number: '05',
    tag: 'Lifting Deep Plane',
    title: 'Reposicionamiento profundo',
    subtitle: 'Resultados frescos y duraderos sin la apariencia estirada o artificial.',
    videoSrc: '/videos/Video005.mp4',
    gradient: 'linear-gradient(145deg, #0E2545, #1D416F)'
  },
  {
    id: '06',
    originalIndex: 5,
    number: '06',
    tag: '30 Años de Docencia',
    title: 'Cirujano de cirujanos',
    subtitle: 'Experiencia formativa de nuevas generaciones en alta complejidad quirúrgica.',
    videoSrc: '/videos/Video006.mp4',
    gradient: 'linear-gradient(145deg, #091930, #173255)'
  },
  {
    id: '07',
    originalIndex: 6,
    number: '07',
    tag: 'Acompañamiento',
    title: 'Recuperación y seguimiento continuo',
    subtitle: 'El compromiso cercano de nuestro equipo en cada etapa de tu evolución.',
    videoSrc: '/videos/Video007.mp4',
    gradient: 'linear-gradient(145deg, #122846, #1E3E68)'
  }
];

const BIG_WIDTH = 340;
const GAP = 24;

export const VideoShowcaseSlider: React.FC = () => {
  const [items, setItems] = useState<ShowcaseVideo[]>(INITIAL_VIDEOS);
  const [targetActiveIdx, setTargetActiveIdx] = useState<number>(0);
  const [trackOffset, setTrackOffset] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [enableTransition, setEnableTransition] = useState<boolean>(true);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTargetActiveIdx(1);
    setEnableTransition(true);

    const shiftDistance = -(BIG_WIDTH + GAP);
    setTrackOffset(shiftDistance);

    timerRef.current = setTimeout(() => {
      setEnableTransition(false);
      setItems(prevItems => {
        const [first, ...rest] = prevItems;
        return [...rest, first];
      });
      setTrackOffset(0);
      setTargetActiveIdx(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setIsAnimating(false);
        });
      });
    }, 450);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setEnableTransition(false);

    setItems(prevItems => {
      const last = prevItems[prevItems.length - 1];
      const rest = prevItems.slice(0, prevItems.length - 1);
      return [last, ...rest];
    });

    const shiftDistance = -(BIG_WIDTH + GAP);
    setTrackOffset(shiftDistance);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setEnableTransition(true);
        setTrackOffset(0);

        timerRef.current = setTimeout(() => {
          setIsAnimating(false);
        }, 450);
      });
    });
  };

  const handleSelectCard = (index: number) => {
    if (index === 0 || isAnimating) return;
    handleNext();
  };

  const handleDragEnd = (_e: any, info: { offset: { x: number } }) => {
    const threshold = 40;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();

    if (activeAudioId === id) {
      const vid = videoRefs.current[id];
      if (vid) vid.muted = true;
      setActiveAudioId(null);
    } else {
      Object.keys(videoRefs.current).forEach(key => {
        const v = videoRefs.current[key];
        if (v) v.muted = true;
      });
      const vid = videoRefs.current[id];
      if (vid) vid.muted = false;
      setActiveAudioId(id);
    }
  };

  const activeVideo = items[0];

  return (
    <section className="v-showcase-section">
      <div className="container v-showcase-container">
        <div className="v-showcase-layout">
          <div className="v-showcase-left">
            <div className="v-left-badge">
              <span>Experiencia & Criterio</span>
            </div>
            
            <h2 className="v-showcase-title">
              <span className="v-title-line">Conoce a fondo</span>
              <em>a tu cirujano</em>
            </h2>
            
            <p className="v-showcase-desc">
              En nuestro Instagram el <a href="https://instagram.com/drcarlosbalcero" target="_blank" rel="noopener noreferrer" className="v-inline-handle">@DrCarlosBalcero</a> comparte continuamente su experiencia médica, casos reales y visión ética, para que antes de tu procedimiento conozcas con total claridad su criterio clínico y la persona en cuyas manos pondrás tu rostro.
            </p>

            <div className="v-left-action" style={{ marginTop: '1.25rem' }}>
              <Link to="/contacto" className="btn btn-showcase-cta">
                Agendar Valoración <ArrowRight size={15} style={{ marginLeft: '6px' }} />
              </Link>
            </div>
          </div>

          <div className="v-showcase-right">
            <motion.div 
              className="v-slider-track"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              animate={{ x: trackOffset }}
              transition={
                enableTransition
                  ? { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 0 }
              }
            >
              {items.map((item, index) => {
                const isLarge = targetActiveIdx === 0 
                  ? index === 0 
                  : (index === 0 || index === targetActiveIdx);

                const isMuted = activeAudioId !== item.id;

                return (
                  <div
                    key={item.id}
                    className={`v-card ${isLarge ? 'is-active' : 'is-small'}`}
                    onClick={() => handleSelectCard(index)}
                    style={{
                      transition: enableTransition ? 'width 0.45s cubic-bezier(0.16, 1, 0.3, 1), height 0.45s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
                    }}
                  >
                    <div className="v-card-media">
                      <video
                        ref={el => { videoRefs.current[item.id] = el; }}
                        src={item.videoSrc}
                        className="v-video-el"
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                      />
                      <div 
                        className="v-fallback-bg" 
                        style={{ background: item.gradient }}
                      />
                    </div>

                    <div className="v-card-overlay" />

                    <div className="v-card-top">
                      <button 
                        className="v-audio-btn"
                        onClick={(e) => toggleMute(item.id, e)}
                        aria-label={!isMuted ? "Silenciar audio" : "Activar audio"}
                        title={!isMuted ? "Silenciar audio" : "Activar audio"}
                      >
                        {!isMuted ? <Volume2 size={14} /> : <VolumeX size={14} />}
                      </button>
                    </div>

                    <div className="v-card-info">
                      <h3 className="v-card-title">{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <div className="v-dots-pagination">
              {INITIAL_VIDEOS.map((video, dotIndex) => {
                const isCurrent = activeVideo.originalIndex === dotIndex;
                return (
                  <button
                    key={video.id}
                    className={`v-dot ${isCurrent ? 'is-active' : ''}`}
                    onClick={() => {
                      const itemIndex = items.findIndex(it => it.id === video.id);
                      if (itemIndex > 0) {
                        handleSelectCard(itemIndex);
                      }
                    }}
                    disabled={isAnimating}
                    aria-label={`Ir al video ${dotIndex + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSlider;
