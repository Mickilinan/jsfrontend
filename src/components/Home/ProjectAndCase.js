import React from 'react'
import img_art1 from '../../assets/images/article-Image-1.png'
import img_art2 from '../../assets/images/article-Image-2.png'
import img_art3 from '../../assets/images/article-Image-3.png'
import img_art4 from '../../assets/images/article-Image-4.png'
import Buttons from '../Generics/Buttons'
import SectionTitle from '../Generics/SectionTitle'

const ProjectAndCase = () => {
  return (
    <section className="project-and-case">
    <div className="container">

       < SectionTitle title="Project & Case Studies" description="Let's Looks our Global Projects"/>

        </div>

        <div className="project-and-cases">
            <a className="project" href="#">
                <img src={img_art1} alt="A mans hands reading a business paper" />
                <h3>Grow your business</h3>
                <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
                <img src={img_art2} alt="Pink apple products on a desk" />
                <h3>Why your client needs a responsive website</h3>
                <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
                <img src={img_art3} alt="Desk with office supplies" />
                <h3>Educate your employees to get better results</h3>
                <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
                <img src={img_art4} alt="Laptop with Business Intelligence Insights" />
                <h3>Business Insights is a important piece of your business</h3>
                <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
        </div>
        <div className="center-content">
            < Buttons type="black" title="All Recent Projects" url="/projects"/>
        </div>
    
</section>
  )
}

export default ProjectAndCase