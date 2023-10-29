import React from 'react'
import img_star from '../../assets/images/Star.svg'
import img_cassandra from '../../assets/images/cassandra.svg'
import img_amanda from '../../assets/images/amanda.svg'
import img_jack from '../../assets/images/jack.svg'
import Buttons from '../Generics/Buttons'

const WhatOurClientSays = () => {
  return (
    
    <section className="testimonial">
        <div className="container">
            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>

            </div>
            <div className="client-says">
                <div id="cassandra">
                    <img src={img_star} alt="five stars review" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                        dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                        voluptate"</p>
                    <div className="nameimage">
                        <img src={img_cassandra} alt="a woman with long dark hair" />
                        <div>
                            <h3>Cassandra Warren</h3>
                            <p><span>Business Manager, Dorfus</span></p>
                        </div>
                    </div>

                </div>
                <div id="amanda">
                    <img src={img_star} alt="five stars review" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                        dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                        voluptate"</p>
                    <div className="nameimage">
                        <img src={img_amanda} alt="smiling woman" />
                        <div>
                            <h3>Amanda Tulling</h3>
                            <p><span>Senior Developer, Square</span></p>
                        </div>
                    </div>
                </div>
                <div id="jack">
                    <img src={img_star} alt="five stars review" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                        dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                        voluptate"</p>

                    <div className="nameimage">
                        <img src={img_jack} alt="smiling man" />
                        <div>
                            <h3>Jack McDogglas</h3>
                            <p><span>Key Account Manager, Gobona</span></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="center-content">
                < Buttons type="black" title="All Reviews" url="/reviews" />
            </div>
        </div>
    </section>
  )
}

export default WhatOurClientSays