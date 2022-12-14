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
      z-index: 0;
    }
    .design2 {
      position: absolute;
      left: 0;
      top: 20rem;
      z-index: 0;
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
  @media screen and (min-width: 320px) and (max-width: 767px) {
    overflow-x: hidden;
    padding: 2rem 0;
    .background {
      display: none;
    }
    .skills__title {
      padding: 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .skills {
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &__bars {
        padding: 0.2rem;
        gap: 0rem;
        align-items: center;
        justify-content: center;
        &__bar {
          .container {
            gap: 1rem;
            progress {
              width: 12rem;
              height: 0.5rem;
              &::-webkit-progress-bar {
                height: 0.3rem;
              }
            }
          }
          h3 {
            font-size: 1rem;
          }
        }
      }
      &__content {
        padding: 0 2rem;
      }
    }

  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    overflow-x: hidden;
    padding: 2rem 0;
    .background{
      display: none;
    }
    .skills__title {
      padding: 2rem;
      text-align: center;
      z-index: 2;
      h2 {
        font-size: 2.5rem;
      }
    }
    .skills {
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &__bars {
        padding: 0.2rem;
        gap: 0rem;
        align-items: center;
        justify-content: center;
        &__bar {
          .container {
            gap: 1.5rem;
            progress {
              width: 18rem;
              height: 1.5rem;
              &::-webkit-progress-bar {
                height: 2rem;
              }
            }
          }
          span{
            transform: translateY(-50%);
          }
          h3 {
            font-size: 1.5rem;
          }
        }
      }
      &__content {
        padding: 0 4rem;
      }
    }
    
  }
`;

export default Skills;
