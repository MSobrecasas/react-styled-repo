import React from "react";
import placeholder from "../assets/placeholder.png";
import loadmore from "../assets/loadmore.png";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import styled from "styled-components";
import Title from "./Title";

function Portfolio() {
  return (
    <Section id="portfiolio">
      <Title value="Portfolio" />
      <div className="background">
        <img src={portfolio1} alt="Desing" className="desing1" />
        <img src={portfolio2} alt="Desing" className="desing2" />
      </div>
      <div className="portfolio__title">
        <p>Our Works </p>
        <h2>Check our super awesome portfolio</h2>
      </div>
      <div className="grid">
        <div className="child-one grid-box">
          <img src={placeholder} alt="placeholder" />
        </div>
        <div className="child-two grid-box">
          <img src={placeholder} alt="placeholder" />
        </div>
        <div className="child-three grid-box">
          <img src={placeholder} alt="placeholder" />
        </div>
        <div className="child-four grid-box">
          <img src={placeholder} alt="placeholder" />
        </div>
        <div className="child-five grid-box">
          <img src={placeholder} alt="placeholder" />
        </div>
        <div className="child-six grid-box">
          <img src={placeholder} alt="placeholder" />
        </div>
        <div className="child-seven grid-box">
          <img src={placeholder} alt="placeholder" />
        </div>
        <div className="child-eight grid-box">
          <img src={placeholder} alt="placeholder" />
        </div>
      </div>
      <div className="portfolio-more">
        <span>Load More</span>
        <img src={loadmore} alt="Load More" />
      </div>
    </Section>
  );
}
const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  background-color: var(--secondary-color);
  .background {
    position: absolute;
    .desing1 {
      position: absolute;
      z-index: 1;
      right: 8%;
      top: 0;
    }
    .desing2 {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 30rem;
      height: 40rem;
    }
  }
  .sideTitle {
    z-index: 1;
    h1 {
      color: white;
    }
  }
  .portfolio__title {
    margin: 6rem 15rem;
    p {
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }
  .grid {
    padding: 0 15rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one one two two"
      "one one three four"
      "five six seven seven"
      "eight six seven seven";
    .grid-box {
      &:nth-of-type(1) {
        grid-area: one;
      }
      &:nth-of-type(2) {
        grid-area: two;
      }
      &:nth-of-type(3) {
        grid-area: three;
      }
      &:nth-of-type(4) {
        grid-area: four;
      }
      &:nth-of-type(5) {
        grid-area: five;
      }
      &:nth-of-type(6) {
        grid-area: six;
      }
      &:nth-of-type(7) {
        grid-area: seven;
      }
      &:nth-of-type(8) {
        grid-area: eight;
      }
    }
  }
`;
export default Portfolio;
