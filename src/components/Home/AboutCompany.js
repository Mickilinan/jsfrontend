import React from 'react'
import img_daria from '../../assets/images/daria.png'
import img_bglinesleft from '../../assets/images/bglinesleft.svg'
import Buttons from '../Generics/Buttons'

const AboutCompany = () => {
  return (
    
    <section className="company">

        <div className="container">
            <div className="parent">

                <img className="daria" src={img_daria} alt="happy woman with a tablet in her hands" />

                <div className="child1">

                    <div>
                        <p><span id="bold">Samantha Brown,</span> <span id="red">Founder</span></p><br />
                        <p>"Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit."</p>
                    </div>

                </div>
                <div className="child2">
                    <img className="bglines" src={img_bglinesleft} alt="white lines" />
                </div>

            </div>



            <div className="about">
                <p> <span id="top">About Company</span></p>
                <h2>We Are Business<br />
                    Consulting & Credit<br />
                    Repair Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam<br />
                    officiis quas assumenda esse obcaecati? Ex esse error voluptates<br /> iure
                    vel totam eos.
                </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis<br />
                    esse quasi incidunt adipisci accusantium libero provident<br />
                    voluptate amet.</p>

                <div className="buttons">
                    < Buttons type="black" title="Learn More" url="/learnmore" />
                    <div>
                        <a className="introvideo" href="introvideo.html"><i className="fa-regular fa-circle-play"></i> Intro Video </a>
                    </div>
                </div>

            </div>


        </div>
    </section>
  )
}

export default AboutCompany