import React from "react";
import styled from "styled-components";
import { BsBehance, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";
import { footerLogoAnimation, footerTextAnimation } from "animation";
import { useScroll } from "components/UseScroll";

function Footer() {
  const [element, controls] = useScroll();
  return (
    <Foot ref={element}>
      <motion.span
       animate={controls}
       variants={footerTextAnimation}
       transition={{
         delay: 0.03,
         type: "tween",
         duration: 0.8,
       }}
      >&copy; Template created with love by Kishan Sheeth</motion.span>
      <motion.div 
       animate={controls}
       variants={footerLogoAnimation}
       transition={{
         delay: 0.03,
         type: "tween",
         duration: 0.8,
       }}
      className="footer__social__icons">
        <BsBehance />
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
      </motion.div>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }

`;
export default Footer;
