import React from 'react';
import './Section3.css';

const Section3 = () => {
  return (
    <>
      <section className="section3-mentoring">
        <div className="section3-content">
          {/* Updated Paragraph with New Content */}
          <p className="section3-paragraph">
            <strong>Jonas Santos</strong>, especialista com anos de experiência no mercado de Limpa Nome, irá guiá-lo passo a passo, compartilhando suas <strong>estratégias comprovadas</strong> para ajudar pessoas e empresas a limparem seus nomes e recuperarem crédito. Além disso, você aprenderá como transformar esse conhecimento em uma <strong>nova e lucrativa fonte de renda</strong> para você!
          </p>

          <img src="../group_6aa-1.webp" alt="Mentoring Program" className="section3-image" />

          {/* Second Updated Paragraph */}
          <p className="section3-paragraph">
            A oportunidade está em suas mãos. Torne-se um especialista no método Limpa Nome, aprenda como gerar renda e fazer a diferença na vida de quem precisa.
          </p>

          <img src="../mask_group-pessoas-ricas-1.webp" alt="Financial Freedom" className="section3-image" />
        </div>
      </section>
    </>
  );
}

export default Section3;
