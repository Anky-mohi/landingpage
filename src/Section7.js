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
      
        <div className="column">
          <div className="module-card">
            <h2>Módulo 1: Coaching de Vida Profissional (4 dias)</h2>
            <ul>
              <li><strong>Desenvolvimento de habilidades pessoais e profissionais:</strong></li>
              <li>Inteligência Emocional e Social</li>
              <li>Desenvolvimento da Autoestima e Autoconfiança</li>
              <li>Gestão do Tempo e Produtividade</li>
              <li>Técnicas de Resolução de Conflitos</li>
              <li>Desenvolvimento de Habilidades de Liderança</li>
              <li>Ferramentas de Avaliação de Competências</li>
              <li><strong>Técnicas de Coaching para Transformação de Vida:</strong></li>
              <li>Metodologias de Mudança de Comportamento</li>
              <li>Criação de Planos de Ação Personalizados</li>
              <li>Técnicas de Motivação e Manutenção de Hábitos</li>
              <li>Estratégias para Superação de Limitações</li>
              <li><strong>O que é Coaching?</strong></li>
              <li>História e Evolução do Coaching</li>
              <li>Tipos de Coaching e Seus Benefícios</li>
              <li>Diferenciação entre Coaching, Mentoria e Terapia</li>
              <li><strong>O que é PNL (Programação Neurolinguística)?</strong></li>
              <li>Fundamentos e História da PNL</li>
              <li>Aplicações Práticas da PNL no Coaching</li>
            </ul>
          </div>
        </div>
  
        <div className="column">
          <div className="module-card">
            <h2>Módulo 2: Mentor de Coaching Financeiro (3 dias)</h2>
            <ul>
              <li><strong>Estratégias financeiras para alcançar a liberdade financeira:</strong></li>
              <li>Criação de Estratégias Personalizadas para Liberdade Financeira</li>
              <li>Estudos de Caso e Exemplos Práticos</li>
              <li><strong>Planejamento financeiro e investimentos:</strong></li>
              <li>Técnicas Avançadas de Planejamento Financeiro</li>
              <li>Análise de Risco e Gestão de Investimentos</li>
              <li><strong>Origem do Dinheiro:</strong></li>
              <li>História do Dinheiro e Seu Impacto Econômico</li>
              <li>Evolução das Finanças Pessoais</li>
              <li><strong>Ciência da Riqueza:</strong></li>
              <li>Princípios Científicos da Criação de Riqueza</li>
              <li>Modelos de Comportamento Financeiro</li>
              <li><strong>Pilares da Riqueza:</strong></li>
              <li>Estrutura e Construção dos Pilares da Riqueza</li>
              <li>Estratégias para Fortalecer os Pilares</li>
              <li><strong>Clareza Financeira:</strong></li>
              <li>Ferramentas de Avaliação de Clareza Financeira</li>
              <li>Estratégias para Alcançar Clareza nos Objetivos Financeiros</li>
              <li><strong>Como Sair das Dívidas:</strong></li>
              <li>Planos de Quitação de Dívidas e Gestão de Crédito</li>
              <li>Estratégias de Negociação e Refinanciamento</li>
              <li><strong>Como Gerar Dinheiro:</strong></li>
              <li>Métodos Diversificados e Fontes de Renda</li>
              <li>Estratégias Empreendedoras e de Investimento</li>
              <li><strong>Tipos de Investimento:</strong></li>
              <li>Análise e Comparação dos Diferentes Tipos de Investimentos</li>
              <li>Estratégias de Diversificação e Gestão de Carteira</li>
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
