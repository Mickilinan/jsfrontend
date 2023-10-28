import React from 'react'
import img_bglinesright from '../../assets/images/bglinesright.svg'
import img_line2 from '../../assets/images/Line 2.svg'

const Services = () => {
  return (
    <section className="services">

    <img className="bglinesright" src={img_bglinesright}alt="white lines" />

    <div className="container">
        <div className="section-title">
            <p>Our Services</p>
            <br />
            <h2>We Provide The Best<br />
                Service For Consulting</h2>

        </div>
        <div className="grid-container">
            <a className="services2" href="#">
                <img src={img_line2} />
                <h3>Business Advice</h3>
                <p>Lorem, ipsum dolor sit amet <br />
                    consectetur adipisicing elit. Officiis <br />
                    in nam possimus.</p>
                <div className="services3"><i className="fa-solid fa-circle-arrow-right"></i></div>
            </a>

            <a className="services2" href="#">
            <img src={img_line2} />
                <h3>Startup Business</h3>
                <p>Lorem, ipsum dolor sit amet<br />
                    consectetur adipisicing elit. Officiis<br />
                    in nam possimus.</p>
                <div className="services3"><i className="fa-solid fa-circle-arrow-right"></i></div>
            </a>

            <a className="services2" href="#">
            <img src={img_line2} />
                <h3>Financial Advice</h3>
                <p>Lorem, ipsum dolor sit amet<br />
                    consectetur adipisicing elit. Officiis<br />
                    in nam possimus.</p>
                <div className="services3"><i className="fa-solid fa-circle-arrow-right"></i></div>
            </a>

            <a className="services2" href="#">
            <img src={img_line2} />
                <h3>Risk Management</h3>
                <p>Lorem, ipsum dolor sit amet<br />
                    consectetur adipisicing elit. Officiis<br />
                    in nam possimus.</p>
                <div className="services3"><i className="fa-solid fa-circle-arrow-right"></i></div>
            </a>

        </div>

        <div className="center-content">
            <a className="btn-transparent" href="browseservices.html">Browse Services <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>

    </div>

</section>
  )
}

export default Services