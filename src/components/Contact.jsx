import React from "react";
import styled from "styled-components";
import Title from "./Title";

function Contact() {
  return (
    <Section id="contact">
      <Title value="contact" />
      <div className="contact">
        <div className="contact__title">
          <p>Stay in touch with us</p>
          <h2>Lorem ipsum dolor sit amet consectetur!</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Use from on the right to contact us or just say hi!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              cum inventore blanditiis doloremque unde expedita placeat possimus
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              facilis! Similique esse repellat totam cum eaque. Corrupti quidem
              temporibus porro natus soluta incidunt molestias, pariatur,
              voluptate eum nesciunt, beatae id.
            </p>
            <div>
              <p>
                <strong>Address:</strong> Av siempre viva
              </p>
              <p>
                <strong>Email:</strong> mail@mail.com
              </p>
              <p>
                <strong>Website:</strong> www.website.com
              </p>
            </div>
          </div>
          <div className="contact__data__form">
            <input type="text" placeholder="name" />
            <input type="email" name="" id="" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 23rem;
    &__title {
      margin: 6rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);
          letter-spacing: 0.2rem;
          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
            letter-spacing: 0.4rem;
          }
        }
        textarea {
          width: 100% !important;
          height: 50%;
          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
          }
        }
      }
    }
  }
`;

export default Contact;
