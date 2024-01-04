import logo from './logo.svg';
import './App.css';
import { Route, Routes, Router, Switch, BrowserRouter } from 'react-router-dom';

import Home from './Components/home';
import AboutUs from './Components/aboutus'
import ContactUs from './Components/contactus'
import Login from './Components/login'
import SignUp from './Components/signup'
import Navbar from './Components/navbar';
import Footer from './Components/footer'
import NotFound from './Components/notfound'
import Patient from './Components/patient'
import Doctor from './Components/doctor'
import Admin from './Components/admin';
import Protected from './Components/Protected';


function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/Patient' element={<Protected Component={Patient} />} />
          <Route path='/Doctor' element={<Protected Component={Doctor} />} />
          <Route path='/Admin' element={<Protected Component={Admin} />} />
          {/* <Route path="/Patient" element={<Patient />} />
          <Route path="/Doctor" element={<Doctor />} />
          <Route path="/Admin" element={<Admin />} /> */}
        </Routes>
      

      {/* <Footer /> */}

    </div>
  );
}

export default App;
