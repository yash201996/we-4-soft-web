import { Component } from "react";
import Logo from "./Logo";
import Links from "./Links";
import "./style.css";
class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="container container__nav">
          <Logo />
          <Links />
          {/* <Quote />
          <Search /> */}
        </div>
      </nav>
    );
  }
}
export default Nav;
