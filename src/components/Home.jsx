import React from "react";
import styled from "styled-components";
import home from "../assets/home.png";
import play from "../assets/play.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        className="home"
      >
        <div className="content">
          <div className="title">
            <h1>Digital Crafters</h1>
          </div>
          <div className="subTitle">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae libero consequatur laborum magni, eius sed, excepturi
              est quam accusamus praesentium nihil placeat repellat ipsum
              architecto vel harum quibusdam voluptate sit.
            </p>
          </div>
          <img src={play} alt="play button" />
        </div>
      </motion.div>
      <motion.div
        className="info"
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        variants={homeInfoAnimation}
      >
        <div className="grid">
          <div className="col">
            <strong>Agency</strong>
            <p>lorem Ipsum</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>lorem Ipsum@lorem.Ipsum</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>lorem Ipsum</p>
          </div>
          <div className="col">
            <strong>address</strong>
            <p>lorem Ipsum</p>
            <p>lorem Ipsum</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>lorem Ipsum</p>
            <p>lorem Ipsum</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>lorem Ipsum</p>
            <p>lorem Ipsum</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    color: white;
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
        text-align: center;

      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;

export default Home;
