import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:contact@we4soft.com">
          <AiFillMail />
          <span>contact@we4soft.com</span>
        </a>

        <a href="tel:+917977382991">
          <AiFillPhone />
          <span>+917977382991</span>
        </a>
      </div>
    );
  }
}

export default Contact;
