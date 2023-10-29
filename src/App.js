
import './App.css';
import AboutCompany from './components/Home/AboutCompany';
import ArticleAndNews from './components/Home/ArticleAndNews';
import Clients from './components/Home/Clients';
import Featuers from './components/Home/Featuers';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import MeetOurTeam from './components/Home/MeetOurTeam';
import NewsLetter from './components/Home/NewsLetter';
import ProjectAndCase from './components/Home/ProjectAndCase';
import Services from './components/Home/Services';
import ShowCase from './components/Home/ShowCase';
import WhatOurClientSays from './components/Home/WhatOurClientSays';
import WhyChooseUs from './components/Home/WhyChooseUs';

function App() {
  return (
    <>
  <Header />
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
  </>
  );
}

export default App;

