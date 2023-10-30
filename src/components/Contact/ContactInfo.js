import React from 'react';


const ContactInfo = () => {
  return (
    <section className="contactinfo">
    <div className="grid-container">
        <div className="grid-item">
            <div className="flex-container">
                <div className="iconcontact"><i className="fa-solid fa-location-dot"></i></div>
                <div className="text-container">
                    <h3>Visit us</h3>
                    <p>Sveavägen 31 <br /> 111 34 STOCKHOLM</p>
                </div>
            </div>
        </div>
        <div className="grid-item">
            <div className="flex-container">
                <div className="iconcontact"><i className="fa-sharp fa-solid fa-phone"></i></div>
                <div className="text-container">
                    <h3>Call us</h3>
                    <p>+46 (8) 121 470 50<br /> +46 (8) 121 470 51</p>
                </div>
            </div>
        </div>
        <div className="grid-item">
            <div className="flex-container">
                <div className="iconcontact"><i className="fa-solid fa-envelope"></i></div>
                <div className="text-container">
                    <h3>Email us</h3>
                    <p>info@crito.com<br /> support@crito.com</p>
                </div>
            </div>
        </div>
    </div>

</section>
  )
}

export default ContactInfo