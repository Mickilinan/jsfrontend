import React from 'react'
import img_line2 from '../../assets/images/Line 2.svg'

const ServiceBox = ({title, description, url} ) => {
  return (
    <a className="services2" href={url}>
    <img src={img_line2} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="services3"><i className="fa-solid fa-circle-arrow-right"></i></div>
</a>
  )
}

export default ServiceBox