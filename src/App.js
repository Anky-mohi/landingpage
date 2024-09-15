// src/App.js
import React, { useRef } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Footer from './Footer';

import Countdown from './Countdown';

import WebinarRegistration from './WebinarRegistration';
import Section11 from './Section11';
import Section12 from './Section12';
import Section13 from './Section13';


function App() {
  const contactRef = useRef(null);

  // Function to handle scroll
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const phoneNumber = "5511912345678";
  const message = "Hello, I need more information!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="App">
  
      <Section1 scrollToContact={scrollToContact}/>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-icon" aria-label="Chat with us on WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      <Section2 />
      <Section3 />
      <Section4 scrollToContact={scrollToContact}/>
      <Section5 />
      <Section6 />
      <Section7 scrollToContact={scrollToContact}/>
      <Section8 />
      <Section9 />
      <WebinarRegistration ref={contactRef}/>
      <Countdown/>
      <Section11 />
      <Section13 />
      <Section10 />
      <Footer />
      
    </div>
  );
}

export default App;
