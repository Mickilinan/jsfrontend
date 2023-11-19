import React from 'react'
import { useEffect } from 'react'
import Buttons from '../Generics/Buttons'
import SectionTitle from '../Generics/SectionTitle'
import { useArtiklar } from '../Generics/ArticlesContext'
import MonthName from '../Generics/MonthName'
import { Link } from 'react-router-dom';

const ArticleAndNews = () => {

  const { articles } = useArtiklar();
  console.log(articles);


  useEffect(() => {
    window.scrollTo(0, 0);


  }, [])


  return (
    <section className="article-news">
      <div className="container">
        <div className="section-buttons-container">
          < SectionTitle title="Article & News" description="Get Every Single Articles & News" />
          < Buttons className="button-browse" type="" title="Browse Articles" url="/news" />
        </div>
        <div className="grid-container">
          <div className="api-articles">
            {articles.map((article) => (
              <div key={article.id} className="article">
                <Link to={`/newsdetails/${article.id}`}>
                  <div>
                    <div className="artikel-datum">
                      <span className="number">
                        {Number(article.published.slice(8, 10))}</span>
                      {" "}
                      <span className="month">
                        <MonthName monthNumber={Number(article.published.slice(5, 7))} /></span>
                    </div>
                    <img className="article-image" src={article.imageUrl} alt={article.title} />
                    <div> <p>{article.category}</p>

                      <h4>{article.title}</h4>
                      <p>{article.content} </p>
                      <p>{article.author}</p>
                    </div>

                  </div>
                </Link>

              </div>
            ))}

          </div>

        </div>


      </div>

    </section>
  )
}

export default ArticleAndNews