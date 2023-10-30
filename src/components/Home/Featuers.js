import React from 'react'
import Buttons from '../Generics/Buttons'
import SectionTitle from '../Generics/SectionTitle'
import FeaturesBox from '../Generics/FeaturesBox'


const Featuers = () => {
  return (
    <section className="features">

    <div className="section-title">

        <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies" />
        < Buttons type="yellow" title="Learn more" url="/learnmore"/>

    </div>

    <div className="advice">
        <div className="container">

            < FeaturesBox url="/businessadvice" 
            title="Business Advice" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
             icon="fa-regular fa-handshake" />

            < FeaturesBox url="/businessadvice" 
            title="Business Advice" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
             icon="fa-regular fa-lightbulb" />

            < FeaturesBox url="/businessadvice" 
            title="Business Advice" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
             icon="fa-solid fa-chart-line" />

            < FeaturesBox url="/businessadvice" 
            title="Business Advice" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
             icon="fa-solid fa-toolbox" />



        </div>

    </div>

</section>
  )
}

export default Featuers