
import React from 'react';
import './Section1.css';

function Section1({ scrollToContact }) {
  return (
    <>
      <section className="section-with-image">
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
        {/* Man's image on the right */}
        <div className="image-container">
          <img src="./jons.png" alt="Jonas Santos" className="man-image" />
        </div>
      </section>
    </>
  );
}

export default Section1;
