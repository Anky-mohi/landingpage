import React from 'react';
import './Section5.css';

const Section5 = () => {
  return (
    <section className="section5-transformation">
      <div className="section5-row">
        <div className="section5-block">
          <img className='icon' src='../transaction_11495531.png' alt="Transaction Icon" />       
          <h3 className="section5-title">Aulas práticas e diretas:</h3>
          <p className="section5-text">
            Você vai aprender de forma objetiva, com exemplos reais do dia a dia.
          </p>
        </div>
        <div className="section5-block">
          <img className='icon' src='../career-promotion_2452167.png' alt="Career Promotion Icon" />       
          <h3 className="section5-title">Apoio completo:</h3>
          <p className="section5-text">
            Material exclusivo, exercícios e suporte para tirar suas dúvidas.
          </p>
        </div>
        <div className="section5-block">
          <img className='icon' src='../process_9539824.png' alt="Process Icon" />       
          <h3 className="section5-title">Bônus Exclusivo:</h3>
          <p className="section5-text">
            Após o Curso
            Preparatório, você continuará recebendo suporte e orientação para garantir que aplique todo o conhecimento adquirido de maneira prática.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
