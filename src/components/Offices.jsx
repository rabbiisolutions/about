import React from "react";
import ImageWebp from "../helpers/ImageWebp";
import mapJpeg from "../images/map.jpg";
import mapWebp from "../images/map.webp";
import location from "../constants/offices";
import texts from "../constants/texts";
import Icon from "./basic/Icon";
import phone from "../icons/contacts/ic_round-perm-phone-msgphone.svg"
import whatsapp from "../icons/contacts/bx_bxl-whatsappwhatsapp.svg"
import mail from "../icons/contacts/bx_bx-mail-sendmail.svg"
import twitter from "../icons/social/circle-twitter.svg"
import youtube from "../icons/social/circle-youtube.svg"
import facebook from "../icons/social/circle-facebook.svg"
import linkedin from "../icons/social/circle-linkedin.svg"

const Offices = () => {
  return (
      <section id={'offices'}>
        <h2 className={'section-title'}>Our Offices</h2>
        <ImageWebp
            src={mapJpeg}
            srcWebp={mapWebp}
            className={'map-image'}
            alt={'location-map'}
        />
        <div id={'row'}>
          <div id={'location'} className={'list'}>
            <span className={'lead'}>{location[0]}</span>
            <span className={'address'}>{location[1]}</span>
            <span className={'address'}>{location[2]}</span>
            <span className={'address'}>{location[3]}</span>
            <span className={'address'}>{location[4]}</span>
          </div>
          <div id={'contacts'} className={'list'}>
            <div className="lead">{texts.contacts}</div>
            <div id={'contact-list'}>
              <span className="icon-text">
                <Icon src={phone} className="footer-icon" height={3} width={3} units={'rem'}/>
                <span>{texts.safaricom}</span>
              </span>
              <span className="icon-text">
                <Icon src={whatsapp} className="footer-icon" height={3} width={3} units={'rem'}/>
                <span>{texts.telkom}</span>
              </span>
              <a className="icon-text" href={'malto:' + texts.sema}>
                <Icon src={mail} className="footer-icon" height={3} width={3} units={'rem'}/>
                <span>{texts.sema}</span>
              </a>
            </div>
          </div>
        </div>
        <div id="find-us" className={'list'}>
          <div className="lead">{texts.findUs}</div>
          <div id="social">
            <a href="https://www.facebook.com/rabbiitech/" target="_blank" rel="noopener noreferrer">
              <Icon src={facebook} className="footer-icon social" height={3} width={3} units={'rem'}/>
            </a>
            <a href="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg" target="_blank" rel="noopener noreferrer">
              <Icon src={youtube} className="footer-icon social" height={3} width={3} units={'rem'}/>
            </a>
            <a href="https://twitter.com/RabbiiTech" target="_blank" rel="noopener noreferrer">
              <Icon src={twitter} className="footer-icon social" height={3} width={3} units={'rem'}/>
            </a>
            <a href="https://www.linkedin.com/company/Rabbii-technology-innovations-ltd/" target="_blank" rel="noopener noreferrer">
              <Icon src={linkedin} className="footer-icon social" height={3} width={3} units={'rem'}/>
            </a>
          </div>
        </div>
      </section>
  )
};

export default Offices;
