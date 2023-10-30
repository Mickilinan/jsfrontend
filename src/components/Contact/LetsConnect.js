import React from 'react'
import img_rectangle1 from '../../assets/images/Rectangle1.svg'

const LetsConnect = () => {
  return (
    
     <section className="lets-connect">
        <img className="background-lines" src={img_rectangle1} />

        <div className="container">
            <p>Home</p>
            <p><span>Contact</span></p>
        </div>

        <div>
            <h2>Let's Connect</h2>
        </div>


    </section>
  )
}

export default LetsConnect