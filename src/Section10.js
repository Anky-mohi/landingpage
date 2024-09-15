import React, { useState } from 'react';
import './Section10.css';

const Section10 = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "Quem pode se inscrever neste curso?", answer: "Este curso é para qualquer pessoa que deseja aumentar sua renda, começar um novo negócio ou expandir suas habilidades no setor financeiro, independentemente da experiência anterior." },
    { question: "Preciso ter experiência prévia no setor financeiro?", answer: "Não, o curso é estruturado para atender tanto iniciantes quanto profissionais que já atuam no setor. Vamos ensinar tudo o que você precisa saber desde o início." },
    { question: "Quais materiais estão incluídos no curso?", answer: "Você receberá acesso a materiais exclusivos, incluindo modelos de contrato, ferramentas de análise de crédito e exercícios práticos para te ajudar a aplicar o que aprendeu." },
    { question: "O curso oferece certificado?", answer: "Sim, ao concluir o curso, você receberá um certificado de participação que poderá usar para demonstrar suas novas habilidades e conhecimentos." },
    { question: "Quanto tempo vou levar para concluir o curso?", answer: "O curso pode ser concluído no seu próprio ritmo, mas a maioria dos alunos o finaliza em cerca de 4 a 6 semanas, dependendo da dedicação e do tempo disponível" }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQ:</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section10;
