import React, { useRef, useState } from 'react';
import './WebinarRegistration.css';
import Swal from 'sweetalert2';

const WebinarRegistration = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formDataObj = new FormData(event.target);
    formDataObj.append('access_key', '93bd95c1-74b2-43e0-9c2c-f92d824b8f8d');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataObj,
    });

    const data = await response.json();

    if (data.success) {
      setResult('');
      setSubmitted(true);
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult('Error: ' + data.message);
    }
  };

  return (
    <section className="webinar-registration-section" ref={ref}>
     <div className='ds'> <h1 className="webinar-registration-titl"> <span className='sp'>
     26 e 27 de Setembro
      </span> </h1>     </div> <br></br>
      <h2 className="webinar-registration-title">Participe do nosso webinar gratuito</h2>
      <p className="webinar-registration-description">
        Inscreva-se no nosso webinar exclusivo e aprenda os segredos da liberdade financeira!
      </p>

      {submitted ? (
        <p className="success-message">Obrigada por se registrar ! Entraremos em contato em breve !</p>
      ) : (
        <form className="webinar-form" onSubmit={onSubmit}>
          <input
            type="text"
            className="webinar-input"
            name="name"
            placeholder="Escreva seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="webinar-input"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="webinar-submit">
            Registre-se agora!
          </button>
        </form>
      )}

      {result && <p className="response-message">{result}</p>}
    </section>
  );
});

export default WebinarRegistration;
