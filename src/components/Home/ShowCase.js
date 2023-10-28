import React from 'react'
import img_rectangle1 from '../../assets/images/Rectangle1.svg'
import img_showcase from '../../assets/images/showcase-image.svg'

const ShowCase = () => {
  return (
    <section className="showcase">

    <img className="background-lines" src={img_rectangle1} alt="white lines" />

    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
            <a className="btn-transparent" href="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>

        <img src={img_showcase} alt="image of a man in a suit with a tablet" />

    </div>


</section>
  )
}

export default ShowCase