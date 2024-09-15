
import React from 'react';
import './Section13.css';

function Section13() {
  return (
    <>
   <section class="testimonial-section">
  <div class="container">
    <h2 class="section-title">What Our Customers Say</h2>
    <div class="testimonial-wrapper">
      <div class="testimonial">
        <div class="testimonial-video">
          <iframe src="https://www.youtube.com/embed/yGqWvvJb_9I?si=0h9nx2FSDTBflFXz" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="testimonial-text">
          <p>"This course changed my life! I was able to clear my debts and improve my credit score in just a few weeks. The instructors are amazing!"</p>
          <span class="customer-name">— John Doe</span>
        </div>
      </div>
      <div class="testimonial">
        <div class="testimonial-video">
          <iframe src="https://www.youtube.com/embed/yGqWvvJb_9I?si=0h9nx2FSDTBflFXz" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="testimonial-text">
          <p>"Amazing content and real actionable steps. I highly recommend it to anyone looking for financial freedom!"</p>
          <span class="customer-name">— Sarah Smith</span>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default Section13;
