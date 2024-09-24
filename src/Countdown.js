import React, { useState, useEffect, useCallback } from 'react';
import './Countdown.css';
import Slider from 'react-slick';
const Countdown = () => {
 
  const getInitialTargetDate = () => {
    const savedTargetDate = localStorage.getItem('targetDate');
    if (savedTargetDate) {
      return new Date(savedTargetDate);
    } else {
      // Set target date to September 27, 2024, 8 PM Brasília Time (UTC-3)
      const targetDate = new Date(Date.UTC(2024, 8, 27, 23, 0, 0)); // Month is 0-indexed, so 8 is September
      localStorage.setItem('targetDate', targetDate);
      return targetDate;
    }
  };

  const [targetDate, setTargetDate] = useState(getInitialTargetDate());
  const [timeLeft, setTimeLeft] = useState({});
  const [showProductPage, setShowProductPage] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
      setShowProductPage(true);
    }

    return timeLeft;
  }, [targetDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (
        updatedTimeLeft.days === 0 &&
        updatedTimeLeft.hours === 0 &&
        updatedTimeLeft.minutes === 0 &&
        updatedTimeLeft.seconds === 0
      ) {
        setShowProductPage(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (showProductPage) {
    return <ProductPage />;
  }

  return (
    <section className="countdown-section">
      <h2 className="countdown-title">Nosso webinar inicia em :</h2>
      <div className="countdown-timer">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    </section>
  );
};
const products = [
  {
    name: "Financial Transformation Course",
    description: "This course will guide you through strategies to achieve financial freedom, led by expert Roberto Navarro.",
    price: "$499",
    image: "https://via.placeholder.com/300", // Replace with actual image URLs
  },
  {
    name: "Investment Mastery Course",
    description: "Learn to master the art of investment with our comprehensive course.",
    price: "$399",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Crypto Basics Course",
    description: "Understand the fundamentals of cryptocurrencies and how to trade them.",
    price: "$299",
    image: "https://via.placeholder.com/300",
  },
  // Add more products as needed
];

const ProductPage = () => {


  return (
<>
<section id="webinar" style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h1 style={{ color: '#333', fontWeight: 'bold', fontSize: '36px' }}>
            Transforme seu futuro financeiro!
            </h1>
            <p style={{ fontSize: '20px', marginTop: '20px', color: '#555' }}>
            Cadastre-se agora e comece sua jornada rumo à liberdade financeira com o{' '}
              <strong>Curso Preparatório: Especialista em Nome Limpo</strong>.
            </p>
            <p style={{ fontSize: '18px', color: '#777' }}>
            26 e 27 de setembro com Jonas Santos
            </p>
          </div>
        </div>

        <div className="row justify-content-center text-center mt-5">
          <div className="col-md-6">
            <a
              href="https://yourstorelink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom btn-signup"
            >
             Cadastre-se agora e garanta sua vaga!
            </a>
            <a
             href="https://chat.whatsapp.com/Jg6xEfOTyH4Kpmi2YqFX9i"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom btn-whatsapp"
            >
              Contate-nos no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>


</>
  );
};
export default Countdown;
