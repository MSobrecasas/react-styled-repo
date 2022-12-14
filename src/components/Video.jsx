import React from "react";
import styled from "styled-components";
import video1 from "../assets/video1.png";
import video2 from "../assets/video2.png";
import { motion } from "framer-motion";
import { videoAnimation } from "animation";
import { useScroll } from "components/UseScroll";

function Video() {
  const [element, controls] = useScroll();
  return (
    <Section ref={element}>
      <div className="background">
        <img src={video1} alt="Design" className="design1" />
        <img src={video2} alt="Design" className="design2" />
      </div>
      <motion.div
        variants={videoAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        className="video"
      >
        <iframe
          width="960"
          height="515"
          src="https://www.youtube.com/embed/gQlMMD8auMs"
          title="BLACKPINK - ‘Pink Venom’ M/V"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </Section>
  );
}
const Section = styled.section`
  background-color: #662d91aa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  .video {
    z-index: 10;
  }
  .background {
    .design1 {
      position: absolute;
      left: 0;
      bottom: -8rem;
      width: 18rem;
    }
    .design2 {
      position: absolute;
      right: 5rem;
      top: 3rem;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .background {
      display: none;
    }
    height: 100%;
    padding: 6rem 2rem;
    .video {
      iframe {
        height: 20rem;
        width: 80vw;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {  
    height: 100%;
    padding: 6rem 2rem;
    .video {
      iframe {
        width: 80vw;
      }
    }
  }
`;

export default Video;
