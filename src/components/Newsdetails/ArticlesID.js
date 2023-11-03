import React, { useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'

const ArticlesID = () => {

  const [article, setArticle] = useState ({})

  const { id } = useParams ()

  useEffect(() => {
    getArticle()

  }, [])


  const getArticle = async () => {
    if ( id !== undefined ) {
    const response = await fetch (`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

    if (response.status === 200) {
    const articleData = await response.json()
    setArticle(articleData[0])
    }
    }

  }



  return (
    <div>
    <h1>{article.title}</h1>
    <p>{article.content}</p>
    <p>Author: {article.author}</p>
    <p>Published: {article.published}</p>
    <p>Category: {article.category}</p>
    <img src={article.imageUrl} alt={article.title} />
  </div>
);
};
  


export default ArticlesID

