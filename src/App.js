import React from 'react';
import backDropHandler from "./events/backDrop";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUpModal from "./components/SignUpModal.jsx";
import Landing from "./components/Landing";
import About from "./components/About";
import TeamBoard from "./components/TeamBoard";
import Offices from "./components/Offices";
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
      <CookiesProvider>
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
      </CookiesProvider>
  );
}

export default App;
