import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'typeface-fira-sans';
import 'typeface-open-sans';

import Trackpage from "./Pages/Track/Trackpage.js";
import Homepage from "./Pages/Homepage/Homepage.js"
import Aboutpage from "./Pages/About/Aboutpage.js"
import ContactPage from "./Pages/Contact/ContactPage.js"
import AddPickupPage from "./Pages/AddPickup/AddPickupPage.js"
import Loginpage from "./Pages/Login/Loginpage.js"
import Admin from "./Pages/Admin/Admin.js"
import EditRequest from "./Pages/Admin/EditRequest.js";
import AddRequest from "./Pages/Admin/AddRequest.js";

function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/about" element={<Aboutpage/>}></Route>
          <Route path="/addpickup" element={<AddPickupPage/>}></Route>
          <Route path="/track" element={<Trackpage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/login" element={<Loginpage/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/edit-request/:req_id" element={<EditRequest/>}></Route>
          <Route path="/add-request" element={<AddRequest/>}></Route>
      </Routes>
     
    </BrowserRouter>
    </>
  );
}

export default App;
