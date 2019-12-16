import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from "./components/aboutView";
import backDropHandler from "./events/backDrop";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import MobileFooter from "./components/Footer";
import SignUpModal from "./components/SignUpModal";

function App() {
  return (
      <Router>
        <NavBar/>
        <AboutUs/>
        <SideBar/>
        <SignUpModal/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <MobileFooter/>
      </Router>
  );
}

export default App;
