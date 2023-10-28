import React from 'react'
import img_25mar from '../../assets/images/25mar.png'
import img_17mar from '../../assets/images/17mar.png'
import img_13mar from '../../assets/images/13mar.png'
import img_dot2 from '../../assets/images/dot2.svg'

const ArticleAndNews = () => {
  return (
    <section className="article-news">
    <div className="container">
        <div className="grid-container">
            <div className="section-title">
                <p>Article & News</p>
                <h2>Get Every Single Articles & News</h2>
            </div>
            <a className="btn-transparent" href="browsearticles.html">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></a>
            
        </div>

        <div className=" get-news">
            <a className="news" href="#">
                <img src={img_25mar} alt="A woman sitting at a table smiling" />
                <p>Business</p>
                <h3>How To Use Digitalization <br />
                    In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Architecto sed hic libero.
                </p>

            </a>
            <a className="news" href="#">
                <img src={img_17mar} alt="the date 17th of march" />
                <p>Business</p>
                <h3>How To Implement Chat GPT<br />
                    In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Architecto sed hic libero.
                </p>

            </a>
            <a className="news" href="#">
                <img src={img_13mar} alt="Two books lying on top of eachother with an mobilephone on top." />
                <p>Business</p>
                <h3>The Guide To Support <br />
                    Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Architecto sed hic libero.
                </p>

            </a>

        </div>
    </div>

    <img src={img_dot2} className="dots" />

</section>
  )
}

export default ArticleAndNews