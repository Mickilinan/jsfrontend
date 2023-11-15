import React from 'react'

const Team = ( { id, imageUrl, name, position }) => {
  return (
    <div id={id} className="team-member">
    <img src={imageUrl} alt={`Portrait of ${name}`} />
    <h3>{name}</h3>
    <p>{position}</p>
  </div>
  )
}

export default Team