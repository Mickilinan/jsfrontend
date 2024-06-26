import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MonthName from '../Generics/MonthName'
import { useArtiklar } from '../Generics/ArticlesContext'
import img_recent from '../../assets/images/Recent Posts.svg'
import img_categories from '../../assets/images/Categories.svg'


const ArticlesID = () => {

  const { articles } = useArtiklar();
  const [article, setArticle] = useState({})
  const { id } = useParams()
  console.log("ID:", id)


  useEffect(() => {
    const selectedArticle = articles.find((a) => a.id === id);
    setArticle(selectedArticle || {});
  }, [id, articles]);


  return (
    <section className="article">
      <div className="container">

        <div>

          <h2>{article.title}.</h2>

          <div className="info-article">
            <p>
              <span className="number">{new Date(article.published).getFullYear()}   </span> 
                <span className="month">
                <MonthName monthNumber={new Date(article.published).getMonth() + 1}  /> 
                   </span>
                 <span className="number">{new Date(article.published).getDate()}  </span>
            </p>
            <p>{article.category}</p>
            <p>Skriven av : {article.author}</p>
          </div>

          <img className="article_img" src={article.imageUrl} alt={article.title} />
          <p>{article.content} </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.  </p>

          <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.
            Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.
            Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>

          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>

          <p>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>

          <span className="citat"> <i className="fa-solid fa-quote-left fa-flip-vertical"></i> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</span>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

        </div>

        <div className="rightbox">
          <form className="search">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Type to search..." />

          </form>
          <img src={img_recent} />
          <img src={img_categories} />
        </div>

      </div>


    </section>
  );
};



export default ArticlesID

