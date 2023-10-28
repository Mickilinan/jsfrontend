import React from 'react'
import img_bg from '../../assets/images/BG.svg'
import img_chooseus from '../../assets/images/chooseus.png'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">


    <div className="container">
        <div className="section-title">
            <p>Why Choose Us</p>
            <h2>Why We Are The <br />
                Best Business <br />
                Consulting Agency</h2>
        </div>

        <a className="choose-us" href="#">
            <div className="ichoose"><i className="fa-regular fa-thumbs-up"></i></div>
            <div>
                <h3>Process Excellence</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>

        </a>

        <a className="choose-us" href="#">
            <div className="ichoose"><i className="fa-solid fa-list-check"></i></div>
            <div>
                <h3>Strategic Planning</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>

        </a>

        <a className="choose-us" href="#">
            <div className="ichoose"><i className="fa-light fa-pen-fancy"></i></div>
            <div>
                <h3>Experience Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>

        </a>

        <a className="choose-us" href="#">
            <div className="ichoose"><i className="fa-solid fa-user-astronaut"></i></div>
            <div>
                <h3>Artificial Intelligence</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>

        </a>



    </div>

    <div className="images">
        <img className="background" src={img_bg} alt="" />
        <img className="twowomen" src={img_chooseus} alt="two women in a meeting in an office" />
    </div>

</section>
  )
}

export default WhyChooseUs