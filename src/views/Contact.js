import React from 'react'
import Header from '../Home/Header'
import LetsConnect from './LetsConnect'
import ContactInfo from './ContactInfo'
import LeaveAMessage from './LeaveAMessage'
import Map from './Map'
import Footer from '../Home/Footer'


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