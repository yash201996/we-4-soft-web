import { Component } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
class Links extends Component {
  constructor() {
    super();
    this.links = [
      "home",
      "about",
      "services",
      "portfolio",
      "testimony",
      "news",
      "contact"
    ];
    this.state = {
      linksVisibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState((lastState) => {
      return {
        linksVisibility: !this.state.linksVisibility
      };
    });
    console.log(this.state.linksVisibility);
  }
  render() {
    return (
      <>
        <div className="links__button hide__button">
          <button className="btn menu" onClick={this.toggleVisibility}>
            <RiMenu3Line color="#000000" size={20}/>
          </button>
        </div>
        <div
            className={`links${
            this.state.linksVisibility ? "_show" : ""
          }`}
        >
          <div className="hide__button">
          <button className="btn menu" onClick={this.toggleVisibility}>
            <RiCloseLine size={30} color="#000000" />
          </button>
        </div>
          {this.links.map((link, index) => {
            return (
              <a
                className={!index ? "active" : ""}
                href={`#${link}`}
                onClick={this.toggleVisibility}
              >
                {link}
              </a>
            );
          })}
        </div>
      </>
    );
  }
}
export default Links;
