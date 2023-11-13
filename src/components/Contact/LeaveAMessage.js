import React, { useState } from 'react';

const LeaveAMessage = () => {
  // State för att hantera formulärdata och statusmeddelande
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setmessage] = useState('');

  // Funktion för att uppdatera formulärdata när användaren ändrar inmatningsfälten
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  };

  // Funktion för att skicka formuläret till webapi
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');

    // Validering med reguljära uttryck
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!nameRegex.test(form.name) || !emailRegex.test(form.email)) {
      setmessage('Please use valid info.');
      return;
    }

    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.status === 200) {
        setmessage('Thank you, your message will be read.');
        setform({
          name: '',
          email: '',
          message: '',
        });

      } else {
        setmessage('Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setmessage('Something went wrong.');
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
            value={form.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Email*"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            rows="4"
            cols="50"
            placeholder="Your Message*"
            name="message"
            value={form.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" className="btn-yellow">
            Send message <i className="fa-solid fa-arrow-up-right"></i>
          </button>
        </form>
        {message && <div>{message}</div>}
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
//             value={form.name}
//             onChange={handleInputChange}
//             required
//             />
//             <input type="text" 
//             placeholder="Email*" 
//             value={form.email} 
//             onChange={handleInputChange}
//             required
//             />
//             <textarea 
//             rows="4" 
//             cols="50" 
//             placeholder="Your Message*"  
//             value={form.message}
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
