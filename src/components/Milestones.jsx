import React from "react";
import milestone1 from "../assets/milestone1.png";
import milestone2 from "../assets/milestone2.png";
import milestone3 from "../assets/milestone3.png";
import milestoneBackground from "../assets/milestone-background.png";
import styled from "styled-components";
import Title from "./Title";
import { motion } from "framer-motion";
import { milestonesAnimation } from "animation";
import { useScroll } from "components/UseScroll";

function Milestones() {
  const [element, controls] = useScroll();
  const milestone = [
    { image: milestone1, data: "clients Served", amount: "407" },
    { image: milestone2, data: "of raw data", amount: "10T" },
    { image: milestone3, data: "recommendation", amount: "235" },
  ];
  return (
    <Section ref={element}>
      <Title value="milestones" />
      <div className="background">
        <img src={milestoneBackground} alt="milestone background" />
      </div>
      <div className="milestones">
        {milestone.map(({ image, data, amount }) => {
          return (
            <motion.div
              variants={milestonesAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              className="milestone"
            >
              <p>{amount}</p>
              <span>{data}</span>
              <img src={image} alt="milestone" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  background-color: var(--primary-color);
  padding-left: 0 10rem;
  position: relative;
  overflow: hidden;
  .background {
    position: absolute;
    left: 0;
    bottom: -30%;
    img {
      height: 43rem;
      z-index: 2;
    }
  }
  .sideTitle {
    z-index: 2;
    h1 {
      color: white;
    }
  }
  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    align-items: center;
    height: 100%;
    .milestone {
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      p {
        font-size: 5rem;
        font-weight: bolder;
        line-height: 3rem;
      }
      span {
        text-transform: uppercase;
        color: #ffffffc7;
      }
      img {
        height: 6rem;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: 5rem 2rem;
    min-height: 100vh;
    height: 100%;
    .background {
      display: none;
    }
    .milestones {
      grid-template-columns: 1fr;
      gap: 5rem;
    }
    .sideTitle {
      z-index: 2;
      transform: translateX(-10%);
      h1 {
        color: white;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 5rem 2rem;
    min-height: 100vh;
    height: 100%;
    .background {
      display: none;
    }
    .milestones {
      grid-template-columns: 1fr;
      gap: 5rem;
    }
    .sideTitle {
      z-index: 2;
      transform: translateX(-5%);
      h1 {
        color: white;
      }
    }
  }

`;

export default Milestones;
