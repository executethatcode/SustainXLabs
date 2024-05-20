import React from 'react'
import HeroBannerAbout from '../../Components/About/HeroBannerAbout'
import ProfileCards from    '../../Components/About/ProfileCards'
import Section4 from '../../Components/Home/Section4'
import NavbarContainer from '../../Components/Navbar/NavbarContainer'
import Footer from "../../Components/Footer/Footer"

const Aboutpage = () => {
  return (
    <div>
      <NavbarContainer/>
        <HeroBannerAbout/>
        <ProfileCards/>
        <Section4/>
        <Footer/>
    </div>
  )
}

export default Aboutpage