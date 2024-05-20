import React from 'react'
import HeroBannerContact from '../../Components/Contact/HeroBannerContact'
import Section1 from '../../Components/Contact/Section1'
import NavbarContainer from '../../Components/Navbar/NavbarContainer'
import Footer from "../../Components/Footer/Footer"

const ContactPage = () => {
  return (
    <div>
    <NavbarContainer/>
    <HeroBannerContact/>
    <Section1/>
    <Footer/>
    </div>
  )
}

export default ContactPage