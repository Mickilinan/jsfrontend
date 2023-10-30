import React from 'react';
import Header from '../components/Home/Header';
import ShowCase from '../components/Home/ShowCase';
import Clients from '../components/Home/Clients';
import Featuers from '../components/Home/Featuers';
import AboutCompany from '../components/Home/AboutCompany';
import Services from '../components/Home/Services';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import ProjectAndCase from '../components/Home/ProjectAndCase';
import MeetOurTeam from '../components/Home/MeetOurTeam';
import WhatOurClientSays from '../components/Home/WhatOurClientSays';
import ArticleAndNews from '../components/Home/ArticleAndNews';
import NewsLetter from '../components/Home/NewsLetter';
import Footer from '../components/Home/Footer';



const Home = () => {
  return (
    <div>
      < Header />
      < ShowCase />
      < Clients />
      < Featuers />
      < AboutCompany />
      < Services />
      < WhyChooseUs />
      < ProjectAndCase />
      < MeetOurTeam />
      < WhatOurClientSays />
      < ArticleAndNews />
      < NewsLetter />
      < Footer />
 

    </div>
  )
}

export default Home