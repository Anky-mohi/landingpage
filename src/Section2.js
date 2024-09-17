import React from 'react';
import './Section2.css';

function Section2() {
  return (
    <>
      <section className="section2-financial-stagnation">
        <div className="section2-content">
          <h1 className="section2-heading">A Armadilha da Estagnação Financeira</h1>
          <br />
          <img src="../mask_group-3-e1721337955491.webp" alt="Financial Trap" className="section2-image" />
          
          {/* Updated Paragraph with New Content */}
          <p className="section2-paragraph">
            Você já se sentiu preso a uma rotina de trabalho, incapaz de seguir em frente? A verdade é que muitas pessoas não conseguem atingir seus objetivos financeiros por falta de conhecimento e oportunidade. <em>Mas a culpa não é sua</em>, faltam oportunidades reais.
          </p>

          <p className="section2-paragraph">
            Agora imagine poder transformar sua situação financeira ajudando outras pessoas. <em>Com o método Limpa Nome você pode fazer exatamente isso.</em> Ensinaremos como ganhar dinheiro ajudando pessoas com crédito ruim a recuperarem sua credibilidade e acesso ao crédito.
          </p>
          
          <br />

          <div className="section2-buttons">
            <div className="section2-button">
              <i className="icon-class-name">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                  <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                  <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path>
                  <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
                </svg>
              </i>
              Contas se acumulando
            </div>

            <br />

            <div className="section2-button">
              <i className="icon-class-name">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                  <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                  <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path>
                  <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
                </svg>
              </i>
              Falta de clareza sobre como investir
            </div>

            <br />

            <div className="section2-button">
              <i className="icon-class-name">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                  <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                  <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path>
                  <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
                </svg>
              </i>
              Dificuldade em encontrar orientação confiável
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
