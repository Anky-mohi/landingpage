import React from 'react';
import './Section9.css';

const Section9 = () => {
  return (
    <section className="live-stream-section">
      <div className="container">
        <strong className='dat'>VENHA TRANSFORMAR SUA VIDA FINANCEIRA ! </strong>
        <br></br><br></br><br></br>
        <div className="live-stream-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yGqWvvJb_9I?si=0h9nx2FSDTBflFXz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Section9;