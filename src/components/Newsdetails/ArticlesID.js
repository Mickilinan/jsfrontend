import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img_recent from '../../assets/images/Recent Posts.svg'
import img_categories from '../../assets/images/Categories.svg'

const ArticlesID = () => {

  const [article, setArticle] = useState({})

  const { id } = useParams()
  console.log("ID:", id)


  useEffect(() => {
    getArticle()

  }, [id])

  const getArticle = async () => {
    try {
      const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);

      if (response.status === 200) {
        const data = await response.json();
        setArticle(data);
      } else {
        console.error('Fel vid hämtning av artikel:', response.status);
      }
    } catch (error) {
      console.error('Ett fel inträffade:', error);
    }
  };

  // const getArticle = async () => {

  //   const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)


  //   if (response.status === 200) {
  //   const data = await response.json()
  //   setArticle(data)
  //   } 
  // }





  return (
    <section className="article">


      <div className="container">

        <div>

          <h1>{article.title}</h1>

          <div className="info-article">
          <p>Author: {article.author}</p>
          <p>Published: {article.published}</p>
          <p>Category: {article.category}</p>
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

            <span> <i class="fa-solid fa-quote-left fa-flip-vertical"></i> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          
        </div>

        <div className="rightbox">
          <form className="search">
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

