import React from 'react'
import img_rectangle1 from '../../assets/images/Rectangle1.svg'

const news = () => {
  return (
    <section className="lets-connect">
    <img className="background-lines" src={img_rectangle1} />

    <div className="container">
        <p>Home</p>
        <p><span>News</span></p>
    </div>

    <div>
        <h2>News & Articles</h2>
    </div>


</section>
  )
}

export default news