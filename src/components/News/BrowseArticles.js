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
    <div>
    <h1>Articles</h1>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <div>
            <img src={article.imageUrl} alt={article.title} />
            
            <h2>{article.title}</h2>
            </div></Link>
        </li>
      ))}
    </ul>
  </div>
);
};

export default BrowseArticles