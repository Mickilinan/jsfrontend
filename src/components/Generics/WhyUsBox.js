import React from 'react'

const WhyUsBox = ({title, description, url, icon}) => {
  return (


    <a className="choose-us" href={url}>
    <div className="ichoose"> <i className={icon}></i> </div>
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    </a>
    
  )
}

export default WhyUsBox