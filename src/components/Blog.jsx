import React from "react";
import placeholder from "../assets/placeholder.png";
import play from "../assets/play.png";
import styled from "styled-components";
import Title from "./Title";
import { motion } from "framer-motion";
import { blogsAnimation } from "animation";
import { useScroll } from "components/UseScroll";

function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title: "Lorem Ipsum",
      type: "Adventure",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis et fugiat neque atque accusantium, dolores iste itaque vitae asperiores harum animi illo perferendis sapiente rem repudiandae, magnam, aliquid nobis ullam.",
    },
    {
      title: "Lorem Ipsum",
      type: "Personal",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis et fugiat neque atque accusantium, dolores iste itaque vitae asperiores harum animi illo perferendis sapiente rem repudiandae, magnam, aliquid nobis ullam.",
    },
    {
      title: "Lorem Ipsum",
      type: "Music",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis et fugiat neque atque accusantium, dolores iste itaque vitae asperiores harum animi illo perferendis sapiente rem repudiandae, magnam, aliquid nobis ullam.",
    },
  ];
  return (
    <Section id="blog" ref={element}>
      <Title value="blog" />
      <div className="decoration"></div>
      <div className="blogs">
        {blogsData.map(({ title, type, description }) => {
          return (
            <motion.div
              variants={blogsAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              className="blog"
            >
              <div className="image">
                <img src={placeholder} alt="Placeholder" />
              </div>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <img src={play} alt="playu" />
                <span>Read More</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  min-height: 100vh;
  position: relative;
  .decoration {
    position: absolute;
    height: 20rem;
    width: 70vw;
    border: 0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem;
  }
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 20rem;
    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .image {
        height: 22rem;
        background-color: #a686f0af;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 2rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
      }
      .description {
        height: auto;
        color: var(--primary-color);
        overflow: hidden;
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-top: 0 2rem;
        cursor: pointer;
        span {
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    margin: 2rem 0;
    .decoration {
      display: none;
    }
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;
export default Blog;
