import React from 'react'
import Header from '../components/Home/Header'
import TopSection from '../components/News/Topsection'
import NewsLetter from '../components/Home/NewsLetter'
import Footer from '../components/Home/Footer'
import BrowseArticles from '../components/News/BrowseArticles'



const News = () => {
  return (
    <div>
      < Header />
      < TopSection />
      < BrowseArticles />
      < NewsLetter />
      < Footer />
    </div>
  )
}

export default News