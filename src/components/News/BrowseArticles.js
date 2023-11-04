import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const BrowseArticles = () => {

    const [articles, setArticles] = useState ([])

    useEffect (() => {
        getArticles ()
    } , [])

    const getArticles = async () => {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles')

        if (response.status === 200) {
            const data = await response.json()
            setArticles(data)
        }
       
    }




  return (
    <section className="browse-articles">
      <div className="container">
    <h2>Our News & Articles</h2>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/newsdetails/${article.id}`}>
            <div>
            <div className="artikel-datum">{article.published}</div>
            <img src={article.imageUrl} alt={article.title} />
            
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

