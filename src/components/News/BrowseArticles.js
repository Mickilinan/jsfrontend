import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useArtiklar } from '../ArticlesContext'


const BrowseArticles = () => {

  const { articles } = useArtiklar();






    // const [articles, setArticles] = useState ([])

    // useEffect (() => {
    //     getArticles ()
    // } , [])

    // const getArticles = async () => {
    //     const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles')

    //     if (response.status === 200) {
    //         const data = await response.json()
    //         setArticles(data)
    //     }
       
    // }

    function getMonthName(monthNumber) {
      const months = [
        "Januari",
        "Februari",
        "Mars",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Augusti",
        "September",
        "Oktober",
        "November",
        "December"
      ];
    
      const monthIndex = monthNumber - 1;
    
      if (months[monthIndex]) {
        return months[monthIndex];
      } else {
        return "Okänd månad";
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
            <div className="artikel-datum">
              <span className="number">
           {Number(article.published.slice(8, 10))}</span>
           {" "}
                 <span className="month"> {getMonthName(Number(article.published.slice(5, 7)))} </span> 
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

