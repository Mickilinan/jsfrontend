import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useArtiklar } from '../ArticlesContext'
import MonthName from '../Generics/MonthName';


const BrowseArticles = () => {

  const { articles } = useArtiklar();


  return (
    <section className="browse-articles">
      <div className="container">
        <h2>Our News & Articles</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
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

                  <p>{article.category}</p>

                  <h4>{article.title}</h4>
                  <p>{article.content} </p>
                  <p>{article.author}</p>
                </div></Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrowseArticles

