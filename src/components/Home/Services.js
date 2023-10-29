import React from 'react'
import img_bglinesright from '../../assets/images/bglinesright.svg'
import img_line2 from '../../assets/images/Line 2.svg'
import ServiceBox from '../Generics/ServiceBox'
import SectionTitle from '../Generics/SectionTitle'
import Buttons from '../Generics/Buttons'

const Services = () => {
  return (
    <section className="services">

    <img className="bglinesright" src={img_bglinesright}alt="white lines" />

    <div className="container">
        < SectionTitle title="Our Services" description="We Provide The Best  Consulting Services" />

        <div className="grid-container">

            < ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice" />
            < ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness" />
            < ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice" />
            < ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement" />
       

        </div>

        <div className="center-content">
            < Buttons type="" title="Browse Services" url="/services" />
        </div>

    </div>

</section>
  )
}

export default Services