import React from "react";
import logo from "../../icons/logo.svg";
import Icon from '../basic/Icon'

const Logo = (props) => {
  return (
      <a href={'#start'}>
        <Icon src={logo} className={props.className} height={props.height} width={props.width} units={props.units}/>
      </a>
  );
};

// Exporting the component
export default Logo;
