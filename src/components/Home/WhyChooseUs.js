import React from 'react'
import img_bg from '../../assets/images/BG.svg'
import img_chooseus from '../../assets/images/chooseus.png'
import SectionTitle from '../Generics/SectionTitle'
import WhyUsBox from '../Generics/WhyUsBox'


const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">


    <div className="container">
       < SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>
        <WhyUsBox url="/process" icon="fa-regular fa-thumbs-up" title="Process Excellence" description="Lorem, ipsum dolor sit amet consectetur."/>
        <WhyUsBox url="/planning" icon="fa-solid fa-list-check" title="Strategic Planning" description="Lorem, ipsum dolor sit amet consectetur."/>
        <WhyUsBox url="/design" icon="fa-light fa-pen-fancy" title="Experience Design" description="Lorem, ipsum dolor sit amet consectetur."/>
        <WhyUsBox url="/ai" icon="fa-solid fa-user-astronaut" title="Artificial Intelligence" description="Lorem, ipsum dolor sit amet consectetur."/>
        </div>
       
    

    <div className="images">
        <img className="background" src={img_bg} alt="" />
        <img className="twowomen" src={img_chooseus} alt="two women in a meeting in an office" />
    </div>
    

</section>
  )
}

export default WhyChooseUs