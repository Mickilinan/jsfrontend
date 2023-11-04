import React, { useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'

const ArticlesID = () => {

  const [article, setArticle] = useState ({})

  const { id } = useParams ()
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

    <h2>{article.title}</h2>
    
    <p>Author: {article.author}</p>
    <p>Published: {article.published}</p>
    <p>Category: {article.category}</p>
    <img src={article.imageUrl} alt={article.title} />
    <p>{article.content}</p>

    </div>
  
     
      </section>
);
};
  


export default ArticlesID

