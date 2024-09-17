import React from 'react';
import './WhatsAppGroupSection.css';

const WhatsAppGroupSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/Jg6xEfOTyH4Kpmi2YqFX9i', '_blank');
  };

  return (
    <section className="whatsapp-section">
      <h2 className="whatsapp-title">Junte-se ao nosso grupo no WhatsApp!</h2>
      <p className="whatsapp-description">
        Venha fazer parte do nosso grupo de Especialistas Limpa Nome!
        Clique abaixo para entrar no nosso grupo do WhatsApp.
      </p>
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        Entrar no grupo do WhatsApp
      </button>
    </section>
  );
};

export default WhatsAppGroupSection;
