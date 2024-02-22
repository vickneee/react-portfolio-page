import React from "react";
import Typewriter from 'typewriter-effect';
import MyTitleMessage from './MyTitleMessage';
import './TitleMessage.css';

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
