import React from 'react';
import './Section4.css';

const Section4 = ({ scrollToContact }) => {
  const cards = [
    {
      title: "Empreendedores e Empresários",
      text: "que desejam maximizar a saúde financeira de seus negócios e criar um legado de prosperidade.",
      backgroundImage: "../148351.webp" // Replace with your image path
    },
    {
      title: "Servidores Públicos",
      text: "Procurando novas formas de fazer fonte de renda",
      backgroundImage: "../casual-young-multiethnic-woman-eyeglasses-600nw-2392376609.webp" // Replace with your image path
    },
    {
      title: "Profissionais Liberais e Autônomos",
      text: "que querem transcender a troca de tempo por dinheiro, criando fontes de renda passiva que lhes permitam viver suas paixões. ",
      backgroundImage: "../young-brazilian-man-isolated-on-600nw-2180583651.webp" // Replace with your image path
    },
    {
      title: "Trabalhadores CLT",
      text: "que sonham com a independência financeira, buscando estratégias para multiplicar seus ganhos.",
      backgroundImage: "../portrait-brazilian-woman-wide-smile-has-short-cu-pretty-brazilian-woman-has-beautiful-smile-her-face-has-103319749.webp" // Replace with your image path
    },
    {
      title: "Profissionais de Marketing Digital",
      text: "que veem na internet um campo fértil para construir e escalar seus negócios de forma inteligente e lucrativa",
      backgroundImage: "../handsome-hispanic-man-smiling-happy-600nw-2121244586.webp" // Replace with your image path
    },
    {
      title: "Professores e Educadores",
      text: "Professores e educadores que queiram ampliar seu curriculo e complementar sua renda",
      backgroundImage: "../casual-young-multiethnic-woman-eyeglasses-600nw-2392376609.webp" // Replace with your image path
    },
  ];

  return (
    <section className="section4-mentoring">
      <div className='ab'>
      <h2 className="section4-title">Nossa mentoria é para quem:</h2>

      </div>
      <div className="section4-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="section4-card"
            style={{
              backgroundImage: `url(${card.backgroundImage})`
            }}
          >
            <h3 className="section4-card-title">{card.title}</h3>
            <p className="section4-card-text">{card.text}</p>
          </div>
        ))}
      </div>
      <button className="section4-button" onClick={scrollToContact}>Quero me inscrever!</button>
    </section>
  );
};

export default Section4;
