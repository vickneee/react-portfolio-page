import React from "react";
import "./Home.css";
import TitleMessage from "../../components/title-message/TitleMessage";
import ParticlesBg from 'particles-bg';
import "tachyons";

// ParticlesBg
let config = {
    num: [2, 7],
    rps: 0.1,
    radius: [5, 9],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-20, 40],
    body: "./img/icon.png", // Whether to render pictures
    rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: {x: 0, y: -10, width: 10, height: 10}, // "All" or "center" or {x:1,y:1,width:100,height:100}
    color: ["#1c98ed", "#004aad"],
    cross: "dead", // cross or bround
    random: 15, // or null,
    g: 5, // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    },
};

const Home = () => {
    return (
        <div className="home" id="home">
            <ParticlesBg type="cobweb" config={config} bg={true}/>
            <TitleMessage/>
        </div>
    );
};

export default Home;
