import React from "react";
import Icon from "./basic/Icon";
import toggle from "../icons/menu.svg"
import Button from "./basic/Button";
import texts from "../constants/texts";
import signUpHandler from "../events/signUpModal";
import menuToggle from "../events/menuToggle";
import logo from "../icons/logo.svg";
import {useCookies} from "react-cookie";

const Logo = (props) => {
  return (
      <a href={texts.menuLinks[0]}>
        <Icon src={logo} className={props.className} height={props.height} width={props.width} units={props.units}/>
      </a>
  );
};

function Toggle() {
  // fetch cookies object, set toggled variable (class)
  const [cookies, setCookie] = useCookies(['toggled']);
  let toggled = cookies['toggled'] ? '' : 'pulse';

  function toggleHandler () {
    menuToggle();
    // set toggled true if not already true
    if (!cookies['toggled']) setCookie('toggled', true, { path: '/' });
  }

  return (
      <Icon src={toggle} className={"toggle " + toggled} height={5.5} width={5} units={'vh'} onClick={e => toggleHandler(e)}/>
  )
}

class NavBar extends React.Component {

  render() {
    return (
        <nav id="nav-bar">
          <Logo className="logo" height={3} units={'rem'}/>
          <span className="nav">
            <a className="nav-item" href={texts.menuLinks[0]}>
                <span className={'text'}>{texts.menuItems[0]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href={texts.menuLinks[1]}>
                <span className={'text'}>{texts.menuItems[1]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href={texts.menuLinks[2]}>
                <span className={'text'}>{texts.menuItems[2]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item active"  href={"#start"}>
                <span className={'text'}>{texts.menuItems[3]}</span>
              <span className={'active'}>&nbsp;</span>
            </a>
            <a className="nav-item" href={texts.menuLinks[3]}>
                <span className={'text'}>{texts.menuItems[4]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href={texts.menuLinks[4]}>
                <span className={'text'}>{texts.menuItems[5]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
        </span>
          <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
          <div className={'right'}>
            <Toggle/>
          </div>
        </nav>
    );
  }
}

export default NavBar;
