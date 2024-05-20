import React from 'react'
import Login from '../../Components/Login/Login'
import NavbarContainer from '../../Components/Navbar/NavbarContainer'
import Footer from "../../Components/Footer/Footer"

const Loginpage = () => {
  return (
    <div>
      <NavbarContainer/>
      <Login />
      <Footer/>
    </div>
  )
}

export default Loginpage