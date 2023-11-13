import React, { useState, useEffect } from 'react'
import img_25mar from '../../assets/images/25mar.png'
import img_17mar from '../../assets/images/17mar.png'
import img_13mar from '../../assets/images/13mar.png'
import img_dot2 from '../../assets/images/dot2.svg'
import Buttons from '../Generics/Buttons'
import SectionTitle from '../Generics/SectionTitle'

import { useArtiklar } from '../ArticlesContext'
import BrowseArticles from '../News/BrowseArticles'
import getMonthName from '../News/BrowseArticles'
import { Link } from 'react-router-dom';

const ArticleAndNews = () => {

  const { articles, getArticles } = useArtiklar();


  useEffect(() => {
    const fetchApiArticles = async () => {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        const data = await response.json();
        getArticles();
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    if (articles.length === 0) {
      fetchApiArticles();
    }

  }, [articles, getArticles]);

  return (
    <section className="article-news">
      <div className="container">
        <div className="grid-container">
          < SectionTitle title="Article & News" description="Get Every Single Articles & News" />
          < Buttons type="" title="Browse Articles" url="/news" />


          <div className="api-articles">
            {articles.map((article) => (
              <div key={article.id} className="article">
                 <Link to={`/newsdetails/${article.id}`}>
                 <div><h2>{article.title}</h2>
                <p>{article.content}</p>
                <p>{article.author}</p>
                <p>{article.published}</p>
                <p>{article.category}</p>
                <img src={article.imageUrl} alt={article.title} />
              </div>
                 </Link>
               
              </div>
            ))}
          </div>

        </div>









        {/* <div className=" get-news">
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

                </div>  */}

      </div>



    </section>
  )
}

export default ArticleAndNews