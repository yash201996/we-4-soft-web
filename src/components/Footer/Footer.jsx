/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer id="contact" className="container footer__container">
        <div className="about">
          <h2>We4Soft</h2>
          <p className="text">
          We design and build digital solutions that accelerate growth and transform your business.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <CgInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#" className="text">
                Cloud Development
              </a>
            </li>
            <li>
              <a href="#" className="text">
                IT Consultant
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Strategy & Research
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <address className="text">
                Office: 1301 Imperial Crest, Sector 26, Taloja, Navi Mumbai 410218.
              </address> 
            </li>
            <li>
              <a href="tel:+917977382991" className="text">
                Tel : +917977382991
              </a>
            </li>
            <li>
              <a href="mailto:contact@we4soft.com" className="text">
                Email: contact@we4soft.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
