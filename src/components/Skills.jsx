import React from "react";
import styled from "styled-components";
import Title from "./Title";
import skills1 from "../assets/skills1.png";
import skills2 from "../assets/skills2.png";
import { motion } from "framer-motion";
import { skillsBarAnimation } from "animation";
import { useScroll } from "components/UseScroll";

function Skills() {
  const [element, controls] = useScroll();
  const skillsData = [
    {
      name: "creativity",
      amount: 75,
    },
    {
      name: "coding",
      amount: 50,
    },
    {
      name: "react",
      amount: 90,
    },
    {
      name: "marketing",
      amount: 70,
    },
    {
      name: "design",
      amount: 30,
    },
  ];
  return (
    <Section id="skills" ref={element}>
      <Title value="skills" />
      <div className="background">
        <img src={skills1} alt="Design" className="design1" />
        <img src={skills2} alt="Design" className="design2" />
      </div>
      <div className="skills__title">
        <p>Our SKils</p>
        <h2>Check our super awesome skills</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {skillsData.map(({ name, amount }) => {
            return (
              <motion.div 
              variants={skillsBarAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              className="skills__bars__bar" key={name}>
                <div className="container">
                  <progress value={amount} max="100" />
                  <span>{name}</span>
                </div>
                <h3>{amount}%</h3>
              </motion.div>
            );
          })}
        </div>
        <div className="skills__content">
          <p className="title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus explicabo ipsum quisquam deserunt officia laboriosam!
          </p>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            temporibus sed aperiam reprehenderit amet aliquid sequi ipsum fugiat
            a nisi, inventore delectus iste, totam voluptas, dicta eligendi
            praesentium omnis? Nostrum.
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  height: 140vh;
  background-color: var(--secondary-color);
  .background {
    position: relative;
    .design1 {
      position: absolute;
      right: 0;
      z-index: 1;
    }
    .design2 {
      position: absolute;
      left: 0;
      top: 20rem;
      z-index: 1;
    }
  }
  .sideTitle {
    h1 {
      color: white;
      font-size: 9rem;
      z-index: 2;
    }
  }
  .skills__title {
    padding: 6rem 10rem;
    p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }
  .skills {
    display: flex;
    padding: 0 20rem;
    gap: 10rem;
    &__bars {
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      &__bar {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        .container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          span {
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--primary-color);
          }
          progress {
            width: 30rem;
            -webkit-appearance: none;
            appearance: none;
            &::-webkit-progress-bar {
              height: 3rem;
              background-color: white;
            }
            &::-webkit-progress-value {
              background-color: var(--primary-color);
            }
          }
        }
        h3 {
          transform: rotate(90deg);
          color: white;
          font-size: 2rem;
        }
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: white;
      z-index: 2;

      .title {
        font-weight: bolder;
        letter-spacing: 0.1rem;
      }
    }
  }
`;

export default Skills;
