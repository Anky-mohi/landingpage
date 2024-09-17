import React from 'react';
import './Section7.css';

const Section7 = ({ scrollToContact }) => {
  return (
    <section className="mentoring-section">
      <div className="header">
        <h1>Com Jonas Santos: A Especialização em Mentoria e Coaching em Finanças mais Completa do Brasil</h1>
        <p>Veja o que você encontrará:</p>
      </div>
      
      <div className="content-wrapper">
      
        {/* First Column with updated content */}
        <div className="column">
          <div className="module-card">
            <h2>*Módulo 1: Primeiros Passos Práticos*</h2>
            <ul>
              <li><strong>Desenvolvimento de competências pessoais e profissionais:</strong></li>
              <li>Inteligência Emocional e Social</li>
              <li>Desenvolvimento da Autoestima e Autoconfiança</li>
              <li>Gestão de Tempo e Produtividade</li>
              <li>Técnicas de Resolução de Conflitos</li>
              <li>Desenvolvimento de Habilidades de Liderança</li>
              <li>Ferramentas de avaliação de clientes</li>
              <li>Técnicas de Vendas</li>
              <li><strong>Metodologias de Mudança de Comportamento:</strong></li>
              <li>Criação de Planos de Ação Personalizados</li>
              <li>Técnicas de motivação e manutenção de hábitos</li>
              <li>Estratégias para superar limitações</li>
              <li><strong>Introdução ao Mercado:</strong></li>
              <li>O que é um especialista em Nome Limpo?</li>
              <li>História das agências de crédito</li>
              <li>Tipos de Análise de Crédito</li>
              <li>Diferenciação entre Serasa, SPC, BACEN, Sinprot</li>
            </ul>
          </div>
        </div>
  
        {/* Second Column with updated content */}
        <div className="column">
          <div className="module-card">
            <h2>*Módulo 2: Principais Pilares do Marketing Clean Name*</h2>
            <ul>
              <li><strong>Estratégias Avançadas:</strong></li>
              <li>Criação de Estratégias Personalizadas para Pessoas Físicas e Jurídicas</li>
              <li>Estudos de caso e exemplos práticos</li>
              <li><strong>Planejamento Financeiro e Investimentos em Campanhas Digitais:</strong></li>
              <li>Técnicas de Atendimento WhatsApp</li>
              <li>Análise de Risco e Gestão de Clientes</li>
              <li><strong>Análise da Origem da Dívida:</strong></li>
              <li>Histórico Financeiro do Cliente e Impacto no Orçamento</li>
              <li>Modelos de Comportamento Financeiro</li>
              <li><strong>Métodos de negociação:</strong></li>
              <li>Criação e Manutenção de Contratos de Prestação de Serviços para Nome Limpo</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cta">
        <button onClick={scrollToContact}>Quero me inscrever!</button>
      </div>
    </section>
  );
}

export default Section7;
