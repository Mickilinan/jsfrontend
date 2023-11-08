import React from 'react'
import Header from '../components/Home/Header'
import TopSection from '../components/News/Topsection'
import ArticlesID from '../components/Newsdetails/ArticlesID'
import ArticleAndNews from '../components/Home/ArticleAndNews'
import Footer from '../components/Home/Footer'


const NewsDetails = () => {
  return (
    <div>
      < Header />
      < TopSection />
     < ArticlesID />

     <div className="newsdetails">
      < ArticleAndNews />
      </div>
      < Footer />

    </div>
  )
}

export default NewsDetails