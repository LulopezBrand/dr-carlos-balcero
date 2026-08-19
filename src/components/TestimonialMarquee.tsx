import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialMarquee.css';

const testimonials = [
  { name: 'María C.', role: 'Paciente', text: 'Buscaba un resultado natural y el Dr. Balcero logró exactamente lo que quería. Mi confianza volvió por completo.', img: '/images/testimonio-paciente-01.jpg' },
  { name: 'Andrea L.', role: 'Paciente', text: 'Su trato humano y ético me dio toda la tranquilidad. La mejor decisión para mi cirugía facial.', img: '/images/testimonio-paciente-02.jpg' },
  { name: 'Carlos R.', role: 'Paciente', text: 'Un maestro. El procedimiento fue impecable y la recuperación mucho más rápida de lo que imaginé.', img: '/images/testimonio-paciente-03.jpg' },
  { name: 'Diana P.', role: 'Paciente', text: 'Excelente profesional y ser humano. Mis resultados son súper naturales.', img: '/images/testimonio-paciente-04.jpg' },
  { name: 'Elena S.', role: 'Paciente', text: 'Me devolvió la armonía a mi rostro sin perder mi esencia. Sus 30 años de experiencia se notan en cada detalle.', img: '/images/expertise-rejuvenecimiento-facial.jpg' },
  { name: 'Valeria M.', role: 'Paciente', text: 'Desde la primera consulta supe que estaba en las manos correctas. Un profesional íntegro y honesto.', img: '/images/filosofia-armonia-consulta.jpg' },
  { name: 'Laura V.', role: 'Paciente', text: 'La perfección técnica unida a una visión artística. Superó todas mis expectativas estéticas y funcionales.', img: '/images/expertise-ultherapy-lifting.jpg' },
  { name: 'Juana M.', role: 'Paciente', text: 'Increíble recuperación y resultados. Me siento 10 años más joven pero sigo siendo yo.', img: '/images/testimonio-paciente-08.jpg' }
];

const ReviewCard = ({ data }: { data: any }) => (
  <div className="review-card">
    <div className="review-header">
      <div className="review-avatar">
        <img src={data.img} alt={data.name} loading="lazy" />
      </div>
      <div className="review-meta">
        <h4>{data.name}</h4>
        <span>{data.role}</span>
      </div>
    </div>
    <div className="review-divider" />
    <p className="review-text">"{data.text}"</p>
    <div className="review-stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="var(--color-primary)" color="var(--color-primary)" />
      ))}
    </div>
  </div>
);

export const TestimonialMarquee: React.FC = () => {
  return (
    <section className="testimonial-section section-padding">
      <div className="container">
        <h2 className="testimonial-title">
          PACIENTES REALES<br />
          <em>Experiencias Reales</em>
        </h2>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {testimonials.map((item, index) => (
            <ReviewCard data={item} key={`t1-${index}`} />
          ))}
          {testimonials.map((item, index) => (
            <ReviewCard data={item} key={`t2-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
