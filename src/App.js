import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavbarContainer from "./Components/Navbar/NavbarContainer.js";
import Footer from "./Components/Footer/Footer.js"
import Trackpage from "./Pages/Track/Trackpage.js";
import Homepage from "./Pages/Homepage/Homepage.js"
import Aboutpage from "./Pages/About/Aboutpage.js"
import ContactPage from "./Pages/Contact/ContactPage.js"
import AddPickupPage from "./Pages/AddPickup/AddPickupPage.js"
import Loginpage from "./Pages/Login/Loginpage.js";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavbarContainer/>
      <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/about" element={<Aboutpage/>}></Route>
          <Route path="/addpickup" element={<AddPickupPage/>}></Route>
          <Route path="/track" element={<Trackpage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/admin" element={<Loginpage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
