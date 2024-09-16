import React, { useEffect, useState } from 'react';
import './Section1.css';

function Section1({ scrollToContact }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a delay to trigger the fade-in effect
    setTimeout(() => {
      setIsVisible(true);
    }, 300); // 300ms delay for fade-in
  }, []);

  return (
    <>
      <section className={`section-with-image ${isVisible ? 'visible' : ''}`}>
        <div className="section-content">
          <h1>Transforme seu Futuro Financeiro com uma Nova Fonte de Renda!</h1>
          <br />
          <h2>
            Inscreva-se agora e comece sua jornada rumo à liberdade financeira! Curso
            Preparatório: Limpa Nome e Aprovação de Crédito <br />
            Com Jonas Santos
          </h2>
          <br />
          <button className="cta-button" onClick={scrollToContact}>
            Quero me inscrever!
          </button>
        </div>
        <div className="image-container">
          <img src="./jons.png" alt="Jonas Santos" className="man-image" />
        </div>
      </section>
    </>
  );
}

export default Section1;
