import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamBurgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Nav>
      <div className="brand__container">
        <a href="" className="brand">
          <img src={logo} alt="logo" />
        </a>
        <div className="toggle"></div>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li >
            <a href="#services">Services</a>
          </li>
          <li >
            <a href="#portfolio">Portfolio</a>
          </li>
          <li >
            <a href="#blog">Blog</a>
          </li>
          <li >
            <a href="#skills">Skills</a>
          </li>
          <li >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 1rem;
  .brand__container{
    margin: 0 2 rem;
    .toggle{
      display: none;
    }
  }
  .links{
    ul{
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active{
        a{
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li{
        a{
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default Navbar;