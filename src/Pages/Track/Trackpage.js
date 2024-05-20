import React from 'react'
import TrackBanner from './TrackBanner'
import PickupHistory from './PickupHistory'
import NavbarContainer from '../../Components/Navbar/NavbarContainer'
import Footer from "../../Components/Footer/Footer"

const Trackpage = () => {
  return (
    <div>
      <NavbarContainer/>
        <TrackBanner/>
        <PickupHistory/>
        <Footer/>
    </div>
  )
}

export default Trackpage