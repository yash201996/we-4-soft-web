/* eslint-disable no-unused-vars */
import portfolioData from "../../../../public/assets/portfolio_json.json";



import { Component } from "react";
import "./style.css";

class PortfolioPage extends Component {
  
  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        {/* <div className="portfolio__header">
          <h1>See Our Works Or Portfolio</h1>
          <button className="btn btn-primary">More About</button>
        </div> */}
        {this.portfolioData.map((data, index) => {
          if (index == 1) {
            return (
              <>
                <div className="portfolio__header">
                  <h1>See Our Works Or Portfolio</h1>
                  <button className="btn btn-primary">More About</button>
                </div>
                <PortfolioPage img={data.picture} title={data.title} text={data.text} />
              </>
            );
          }
          return                <PortfolioPage img={data.picture} title={data.title} text={data.text} />
          ;
        })}
      </section>
    );
  }
}
export default PortfolioPage;
