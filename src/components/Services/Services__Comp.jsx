import { Component } from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";

class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp">
        <div>
          <h1>Our Servcices For Technology You Need</h1>
          <button className="btn btn-primary">Load More</button>
        </div>
        <div>
          <div className="services__items">
            <div className="icon">
              <GrShieldSecurity />
            </div>
            <h4>Mobile App Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="services__items">
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>Web Applications</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="services__items">
            <div className="icon">
              <GrShieldSecurity />
            </div>
            <h4>Desktop Applications</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="services__items">
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>IT Consultant</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComp;
