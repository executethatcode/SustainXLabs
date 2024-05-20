import React from 'react'
import HeroBannerUser from "../../Pages/AddPickup/HeroBannerUser.js"
import AddPickup from "../../Pages/AddPickup/AddPickup.js"
import NavbarContainer from '../../Components/Navbar/NavbarContainer'
import Footer from "../../Components/Footer/Footer"

const AddPickupPage = () => {
  return (
    <div>
      <NavbarContainer/>
        <HeroBannerUser/>
        <AddPickup/>
        <Footer/>
    </div>
  )
}

export default AddPickupPage