import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({type, title, url}) => {
  
    const getButtonClassName = () => {
        switch(type) {
          case 'yellow' :
            return 'btn-yellow'
            case 'black':
            return 'btn-black'
            default:
              return 'btn-transparent'
        }
      }
      
      
      
      
        return (
          <Link to={url} className={getButtonClassName()}>
            {title} <i className="fa-regular fa-arrow-up-right"></i>
            </Link>
        )
  
}

export default Buttons