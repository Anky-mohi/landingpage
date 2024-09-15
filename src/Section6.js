import React from 'react';
import './Section6.css';

const Section6 = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title"> CLIENTES SATISFEITOS:</h2>
      <br></br><br></br><br></br>
      <div className="testimonials-row">
        <div className="">
          <h3 className=""></h3>
          <p className="testimonial-description">
          
          </p>
        </div>
        <div className="testimonial-item">
          <h3 className="testimonial-name">Ana Silva</h3>
          <p className="testimonial-description">
          "Com o curso do Jonas, consegui abrir meu próprio negócio e hoje ajudo 
          dezenas de pessoas a recuperarem seu crédito!"
          </p>
        </div>
        <div className="testimonial-item">
          <h3 className="testimonial-name">Carlos Souza</h3>
          <p className="testimonial-description">
          "O curso mudou minha vida! Agora tenho uma renda extra mensal trabalhando 
          em casa, no meu próprio horário."
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Section6;
