import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const BrowseArticles = () => {

    const [articles, setArticles] = useState ([])

    useEffect (() => {
        getArticles ()
    } , [])

    const getArticles = async () => {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles')

        if (response.status === 200)
        setArticles(await response.json())
    }




  return (
    <div>

    {
        articles.map(article =>(
            <Link key={article.id} to="{`/newsDetails/${article.id}`}">
                Läs mer!





            </Link>


        ))
    }

    </div>
  )
}

export default BrowseArticles