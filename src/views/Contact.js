import React from 'react'
import Header from '../components/Home/Header'
import LetsConnect from '../components/Contact/LetsConnect'
import ContactInfo from '../components/Contact/ContactInfo'
import LeaveAMessage from '../components/Contact/LeaveAMessage'
import Map from '../components/Contact/Map'
import Footer from '../components/Home/Footer'


const Contact = () => {
  return (
    <div>
       <Header />
      <LetsConnect/>
      <ContactInfo/>
      <LeaveAMessage/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Contact