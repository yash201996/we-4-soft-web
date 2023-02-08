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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe
            voluptatum repellat placeat aperiam. Molestiae consectetur molestias
            magni laudantium doloremque!
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
                Cyber Security
              </a>
            </li>
            <li>
              <a href="#" className="text">
                IT COnsultant
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
                Office: 232 California Road Imperial
              </address>
            </li>
            <li>
              <a href="tel:+917977382991" className="text">
                Tel : +917977382991
              </a>
            </li>
            <li>
              <a href="mailto:we4soft@mail.com" className="text">
                Email: we4soft@mail.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
