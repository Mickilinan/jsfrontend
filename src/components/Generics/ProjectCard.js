import React from 'react'

const ProjectCard = ( { imageUrl, title, url }) => {
  return (
    <> 
    <a className="project" href="#">
    <img src={imageUrl} alt={`Project: ${title}`} />
    <h3>{title}</h3>
    <div className="readmore">{url} <i className="fa-regular fa-arrow-up-right"></i></div>
  </a>
</>
   
);
  
}

export default ProjectCard