import React from 'react'
import img_star from '../../assets/images/Star.svg'
import img_cassandra from '../../assets/images/cassandra.svg'
import img_amanda from '../../assets/images/amanda.svg'
import img_jack from '../../assets/images/jack.svg'
import Buttons from '../Generics/Buttons'
import SectionTitle from '../Generics/SectionTitle'
import Testimonial from '../Generics/Testimonial'

const testimonialsInfo = [
  {
    id: 'cassandra',
    starImageUrl: img_star,
    review: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"',
    clientImage: img_cassandra,
    clientName: 'Cassandra Warren',
    clientPosition: 'Business Manager, Dorfus',
  },
  {
    id: 'amanda',
    starImageUrl: img_star,
    review: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"',
    clientImage: img_amanda,
    clientName: 'Amanda Tulling',
    clientPosition: 'Senior Developer, Square',
  },
  {
    id: 'jack',
    starImageUrl: img_star,
    review: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"',
    clientImage: img_jack,
    clientName: 'Jack McDogglas',
    clientPosition: 'Key Account Manager, Gobona',
  },
];

const WhatOurClientSays = () => {
  return (

    <section className="testimonial">
      <div className="container">
        < SectionTitle title="Testimonial" description="What Our Client Says" />
        <div className="client-says">
          {testimonialsInfo.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <div className="center-content">
          < Buttons type="black" title="All Reviews" url="/reviews" />
        </div>
      </div>
    </section>
  )
}

export default WhatOurClientSays