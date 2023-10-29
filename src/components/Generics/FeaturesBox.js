import React from 'react'

const FeaturesBox = ({title, description, url, icon}) => {
  return (
    <a className="advices" href={url}>
    <i className={icon}></i>
    <h3>{title}</h3>
    <p> {description}</p>
</a>
  )
}

export default FeaturesBox