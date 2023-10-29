import React from 'react'

const WhyUsBox = ({title, description, url, icon}) => {
  return (


    <a className="choose-us" href={url}>
    <div className="ichoose"> <i className={icon}></i> </div>

        <h3>{title}</h3>
        <p>{description}</p>
    </a>
    
  )
}

export default WhyUsBox