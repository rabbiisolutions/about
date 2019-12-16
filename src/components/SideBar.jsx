import React from "react";
import texts from "../constants/Texts";
import menuToggle from "../events/MenuToggle";


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      servicesOpen: false
    };
  }

  servicesToggle(e) {
    if (!this.state.servicesOpen) {
      document.getElementsByClassName('services')[0].classList.toggle('hidden');
    }
  };

  menuHandler(e) {
    const target = e.target;
    if (this.state.active)
      this.toggleActive(this.state.active);
    this.toggleActive(target);
    this.setState({active: target});
    if (target.classList[0] === 'menu-sub-item')
      this.setState( {servicesOpen: !this.state.servicesOpen});
    else {
      this.setState( {servicesOpen: false});
      this.servicesToggle(e);
    }
    menuToggle(target);
  }

  toggleActive(item) {
    item.classList.toggle('active');
  }

  render() {
    return (
        <nav className="menu hidden">
          <div className="side-bar">
            <div className="menu-title">{texts.menuTitle}</div>
            <div className="menu-items">
              <a className="menu-item active"  href="#landing-image" onClick={e => this.menuHandler(e)}>
                {texts.menuItems[0]}
              </a>
              <a className="menu-item" href={'https://catalogue.rabbii.co.ke'}>
                {texts.menuItems[1]}
              </a>
              <a className="menu-item" href="https://tuition-jobs.rabbii.co.ke/">
                {texts.menuItems[2]}
              </a>
              <a className="menu-item" href="https://about.rabbii.co.ke/">
                {texts.menuItems[3]}
              </a>
              <a className="menu-item" href="https://trending.rabbii.co.ke/">
                {texts.menuItems[4]}
              </a>
              <a className="menu-item" href="https://faqs.rabbii.co.ke/">
                {texts.menuItems[5]}
              </a>
            </div>
          </div>
        </nav>
    );
  }
}

export default SideBar;
