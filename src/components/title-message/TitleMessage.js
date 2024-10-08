import React from "react";
import TextLoop from "react-text-loop";
import './TitleMessage.css';
import styled from "styled-components";

const MyTitleMessage = styled.h1`
    position: absolute;
    width: 100%;
    top: 22rem;
    z-index: 1;
    text-align: center;

    strong {
        font-size: 1.25em;
    }
    
    div {
        color: ${props => props.theme};
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        font-weight: 100;
        
        .main {
            font-size: 50px;
        }
        
        .sub {
            font-size: 27px;
            letter-spacing: 2px;
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
                    <TextLoop springConfig={{ stiffness: 180, damping: 20 }} interval={3000}
                        children={
                        ["Coding Enthusiast", "Student", "Interested in", "Web Development", "Web Design"]
                        }
                    />
                </div>
            </div>
        </div>
    </MyTitleMessage>
);

export default TitleMessage;
