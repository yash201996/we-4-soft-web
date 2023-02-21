import { Component } from "react";
import "./style.css";
class Banner extends Component {
  render() {
    return (
      <section id="banner" className="banner__container">
        <div className="container">
          <h1>
            Let's Boost Your Business
            <br /> With The Latest Technology
          </h1>
          <a className="btn btn-primary" href="https://forms.gle/CLFqVKq2FDzdRzXY6"  target="_blank" rel="noreferrer">Get In Touch</a>
        </div>
      </section>
    );
  }
}
export default Banner;
