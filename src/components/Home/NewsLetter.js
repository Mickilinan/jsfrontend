import React from 'react'
import img_element from '../../assets/images/Element.svg'

const NewsLetter = () => {
  return (
    <section className="newsletter">
    <img className="backgroundlines-right" src={img_element} alt="grey lines" />
    <div className="container">
        <h2>Get News Updates By Signup</h2>
        <form>
            <input type="text" placeholder="username@domain.com" />
            <button className="btn-yellow">Subscribe <i className="fa-solid fa-arrow-up-right"></i></button>
        </form>

    </div>
</section>
  )
}

export default NewsLetter