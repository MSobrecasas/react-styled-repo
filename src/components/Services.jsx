import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import play from "../assets/play.png";
import Title from "components/Title";
import { useScroll } from "components/UseScroll";
import { motion } from "framer-motion";
import { servicesAnimation } from "animation";

function Services() {
  const [element, controls] = useScroll();
  const data = [
    {
      type: "Desing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem facere aspernatur nihil ut, itaque delectus iure quis laboriosam pariatur illo vero veritatis dolor nostrum illum. Veritatis doloribus blanditiis ex?",
      image: service1,
    },
    {
      type: "Code",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem facere aspernatur nihil ut, itaque delectus iure quis laboriosam pariatur illo vero veritatis dolor nostrum illum. Veritatis doloribus blanditiis ex?",
      image: service2,
    },
    {
      type: "Support",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem facere aspernatur nihil ut, itaque delectus iure quis laboriosam pariatur illo vero veritatis dolor nostrum illum. Veritatis doloribus blanditiis ex?",
      image: service3,
    },
  ];
  return (
    <Section id="services" ref={element}>
      <Title value="services" />
      <div className="services">
        {data.map(({ type, text, image }, index) => {
          return (
            <motion.div
              className="services__service"
              variants={servicesAnimation}
              animate={controls}
              transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
            >
              <div className="services__service__image">
                <img src={image} alt="service" />
              </div>
              <div className="services__service__title">
                <span>{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <p className="services__service__description">{text}</p>
              <img src={play} alt="Play" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;
    &__service {
      padding: 2rem;
      &:nth-of-type(3) {
        background-color: var(--primary-color);
        .services__service__title {
          span {
            color: white;
          }
        }
        .services__service__description {
          color: white;
        }
      }
      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;
export default Services;
