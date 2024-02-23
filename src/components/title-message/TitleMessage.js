import React from "react";
import Typewriter from 'typewriter-effect';
import './TitleMessage.css';
import styled from "styled-components";

const MyTitleMessage = styled.div`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  text-align: center;

  .titleMessage {
    background-color: #1c98ed;
    padding: 0.7em 0;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .heading {
    color: ${props => props.theme.textColor};
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
  }

  .main {
    font-size: 50px;
  }

  .sub {
    font-size: 27px;
    letter-spacing: 2px;
  }

  .my-name {
    font-family: Monoton, sans-serif;
    color: white;
    animation-name: moveInLeft;
    animation-duration: 3s;
    animation-timing-function: ease-in;
  }

  @media only screen and (max-width: 786px) {
    .my-name {
      font-size: 0.8em !important;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TitleMessage = () => (
    <MyTitleMessage>
        <div className="titleMessage shadow-md">
            <div className="heading">
                <div className="main text-center">
                    Hi, I am
                    <br/>
                    <span className="my-name">
            <strong>Victoria Vavulina</strong>
          </span>
                </div>
                <div className="sub">
                    <Typewriter
                        options={{
                            strings: ["Coding Enthusiast", "Student", "Interested in", "Web Development", "Web Design"],
                            autoStart: true,
                            loop: true,
                            delay: 70
                        }}
                    />
                </div>
            </div>
        </div>
    </MyTitleMessage>
);

export default TitleMessage;
