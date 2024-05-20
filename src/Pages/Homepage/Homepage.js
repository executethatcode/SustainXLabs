import React from 'react'
import HeroBanner from '../../Components/Home/HeroBanner'
import Section1 from '../../Components/Home/Section1'
import Section2 from '../../Components/Home/Section2'
import Section3 from '../../Components/Home/Section3'
import Section4 from '../../Components/Home/Section4'
import NavbarContainer from '../../Components/Navbar/NavbarContainer'
import Footer from "../../Components/Footer/Footer"


const Homepage = () => {
  return (
    <>
    <NavbarContainer/>
    <HeroBanner/>
    <Section1/>
    <Section2/>

    <Section4/>
    <Footer/>
    
    </>
  )
}

export default Homepage