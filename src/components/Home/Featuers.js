import React from 'react'
import Buttons from '../Generics/Buttons'


const Featuers = () => {
  return (
    <section className="features">

    <div className="section-title">

        <p>Features</p>
        <h2>Our Accounting is<br />
            trusted by thousand<br />
            of companies</h2>

        < Buttons type="yellow" title="Learn more" url="/learnmore"/>

    </div>

    <div className="advice">
        <div className="container">

            <a className="advices" href="#">
                <i className="fa-regular fa-handshake"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum, dolor sit amet<br />
                    consectetur adipisicing elit.</p>
            </a>

            <a className="advices" href="#">
                <i className="fa-regular fa-lightbulb"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum, dolor sit amet<br />
                    consectetur adipisicing elit.</p>
            </a>

            <a className="advices" href="#">
                <i className="fa-solid fa-chart-line"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum, dolor sit amet<br />
                    consectetur adipisicing elit.</p>
            </a>

            <a className="advices" href="#">
                <i className="fa-solid fa-toolbox"></i>
                <h3>Risk Management </h3>
                <p>Lorem ipsum, dolor sit amet<br />
                    consectetur adipisicing elit.</p>
            </a>


        </div>

    </div>

</section>
  )
}

export default Featuers