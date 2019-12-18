import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import backDropHandler from "./events/backDrop";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUpModal from "./components/SignUpModal.jsx";
import Landing from "./components/Landing";
import About from "./components/About";
import TeamBoard from "./components/TeamBoard";
import Offices from "./components/Offices";

function App() {
  return (
      <Router>
        <main>
          <NavBar/>
          <Landing/>
          <About/>
          <TeamBoard/>
          <Offices/>
        </main>
        <SideBar/>
        <SignUpModal/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <Footer/>
      </Router>
  );
}

export default App;
