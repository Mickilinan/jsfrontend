import React, { useState } from 'react';

const LeaveAMessage = () => {
  // State för att hantera formulärdata och statusmeddelande
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Funktion för att uppdatera formulärdata när användaren ändrar inmatningsfälten
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funktion för att skicka formuläret till webapi
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');

    // Validering med reguljära uttryck
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!nameRegex.test(formData.name) || !emailRegex.test(formData.email)) {
      setStatusMessage('Please use valid info.');
      return;
    }

    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setStatusMessage('Thank you, your message will be read.');
        setFormData({
          name: '',
          email: '',
          message: '',
        });

      } else {
        setStatusMessage('Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setStatusMessage('Something went wrong.');
    }
  };

  return (
    <section className="leave-a-message">
      <div className="container">
        <h2>Leave us a message for any information.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name*"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Email*"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            rows="4"
            cols="50"
            placeholder="Your Message*"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" className="btn-yellow">
            Send message <i className="fa-solid fa-arrow-up-right"></i>
          </button>
        </form>
        {statusMessage && <div>{statusMessage}</div>}
      </div>
    </section>
  );
};

export default LeaveAMessage;













// import React, {useState} from 'react'

// const LeaveAMessage = () => {



//   return (
//     <section className="leave-a-message">

//     <div className="container">
//         <h2>Leave us a message for any information.</h2>
//         <form onSubmit={handleSubmit}>
//             <input type="text" 
//             placeholder="Name*" 
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             />
//             <input type="text" 
//             placeholder="Email*" 
//             value={formData.email} 
//             onChange={handleInputChange}
//             required
//             />
//             <textarea 
//             rows="4" 
//             cols="50" 
//             placeholder="Your Message*"  
//             value={formData.message}
//             onChange={handleInputChange}
//             required

//             ></textarea>
//             <button type="submit" className="btn-yellow">Send message <i className="fa-solid fa-arrow-up-right"></i></button>
//         </form>
//         </div>
// </section>

//   )
// }

// export default LeaveAMessage
