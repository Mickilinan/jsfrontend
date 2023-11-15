import React from 'react'

const Testimonial = ({ id, starImageUrl, review, clientImage, clientName, clientPosition }) => {
  return (
    <div id={id} >
      <img src={starImageUrl} alt="Five stars review" />
      <p>{review}</p>
      <div className="name-image">
        <img src={clientImage} alt={`Portrait of ${clientName}`} />
        <div>
          <h3>{clientName}</h3>
          <p>
            <span>{clientPosition}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial