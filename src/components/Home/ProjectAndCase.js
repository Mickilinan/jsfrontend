import React from 'react'
import img_art1 from '../../assets/images/article-Image-1.png'
import img_art2 from '../../assets/images/article-Image-2.png'
import img_art3 from '../../assets/images/article-Image-3.png'
import img_art4 from '../../assets/images/article-Image-4.png'
import Buttons from '../Generics/Buttons'
import SectionTitle from '../Generics/SectionTitle'
import ProjectCard from '../Generics/ProjectCard'

const ProjectAndCase = () => {
  return (
    <section className="project-and-case">
    <div className="container">

       < SectionTitle title="Project & Case Studies" description="Let's Looks our Global Projects"/>

        
       <div className="project-and-cases">
      <ProjectCard imageUrl={img_art1} title="Grow your business" url="Read More" />
      <ProjectCard imageUrl={img_art2} title="Why your client needs a responsive website" url="Read More" />
      <ProjectCard imageUrl={img_art3} title="Educate your employees to get better results" url="Read More" />
      <ProjectCard imageUrl={img_art4} title="Business Insights is an important piece of your business" url="Read More" />
    </div>
      
        <div className="center-content">
            < Buttons type="black" title="All Recent Projects" url="/projects"/>
        </div>
        </div>
</section>
  )
}

export default ProjectAndCase