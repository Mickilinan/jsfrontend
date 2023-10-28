import React from 'react'
import img_element from '../../assets/images/Element.svg'

const NewsLetter = () => {
  return (
    <section class="newsletter">
    <img class="backgroundlines-right" src={img_element} alt="grey lines" />
    <div class="container">
        <h2>Get News Updates By Signup</h2>
        <form>
            <input type="text" placeholder="username@domain.com" />
            <button class="btn-yellow">Subscribe <i class="fa-solid fa-arrow-up-right"></i></button>
        </form>

    </div>
</section>
  )
}

export default NewsLetter