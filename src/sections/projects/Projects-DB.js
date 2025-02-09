// Projects
import OtaKiinniJosSaat from "../../assets/img/projects/OtaKiinniJosSaat.png";
// import TimeAB from "../../assets/img/projects/TimeAB.png";
import TasksApp from "../../assets/img/projects/TasksApp.png";
import Helppomatka from "../../assets/img/projects/Helppomatka.png";
// import MyDiamonds from "../../assets/img/projects/MyDiamonds.png";
import MounTours from "../../assets/img/projects/Mountours.png";
import PortfolioPage from "../../assets/img/projects/PortfolioPage.png";
import TicTacToe from "../../assets/img/projects/TicTacToe.png";

// Skills
import TRELLO from "../../assets/img/skills/trello.png";
import HTML5 from "../../assets/img/skills/html5.png";
import CSS3 from "../../assets/img/skills/css3.png";
import SASS from "../../assets/img/skills/sass.png";
import PYTHON from "../../assets/img/skills/python.svg";
import JAVASCRIPT from "../../assets/img/skills/js.svg";
import TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import REACT from "../../assets/img/skills/react-circle.png"
import REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import TAILWINDCSS from "../../assets/img/skills/tailwindcss.svg";
import NODEJS from "../../assets/img/skills/node-js.png";
import EXPRESS from "../../assets/img/skills/express.svg";
import POSTMAN from "../../assets/img/skills/postman-logo.png";
import SQL from "../../assets/img/skills/mysql.png";
import MONGODB from "../../assets/img/skills/mongo-db.png";
import AMPLIFY from "../../assets/img/skills/amplify.jpeg";
import NETLIFY from "../../assets/img/skills/netlify.png";
import RENDER from "../../assets/img/skills/render.png";

export const projects = [
  {
    src: OtaKiinniJosSaat,
    alt: "Ota kiinni jos saat lentopeli",
    date: "Dec 2024",
    text: "Ota kiinni jos saat",
    description: "Originally developed as a console game, this full-stack application was expanded into a browser-based version. The backend is implemented using Python and a MariaDB database, while the frontend is built with HTML, CSS, and JavaScript technologies. The project also utilizes external APIs, such as Google Maps API and AzureOpenAI GPT-4. This project was developed as a group effort during the Software Development 1 and 2 courses at Metropolia University of Applied Sciences.",
    techUsed: [
      {src: TRELLO, alt: "Trello"},
      {src: HTML5, alt: "HTML 5"},
      {src: CSS3, alt: "CSS 3"},
      {src: JAVASCRIPT, alt: "JavaScript"},
      {src: PYTHON, alt: "Python"},
      {src: POSTMAN, alt: "Postman"},
      {src: SQL, alt: "MySQL"},
    ],
    liveLink: "https://www.youtube.com/watch?v=2oeH_PIistw",
    sourceCodeLink: "https://github.com/vickneee/ota-kiinni-jos-saat",
  },
  // {
  //   src: TimeAB,
  //   alt: "TimeAB - Luxury Watches Store",
  //   date: "Oct 2024",
  //   text: "TimeAB",
  //   description: "TimeAB is a school project I created at Metropolia University of Applied Sciences. It’s a fictional luxury watch store UI website, built using basic HTML and CSS. The website is hosted on Netlify, but it only showcases the user interface and does not include any interactive features or links. The website is currently not responsive.",
  //   techUsed: [
  //     {src: HTML5, alt: "HTML 5"},
  //     {src: CSS3, alt: "CSS 3"},
  //     {src: NETLIFY, alt: "Netlify"}
  //   ],
  //   liveLink: "https://timeab.netlify.app/",
  //   sourceCodeLink: "https://github.com/vickneee/timeAB",
  // },
  {
    src: TasksApp,
    alt: "Tasks App",
    date: "Apr 2024",
    text: "Tasks App",
    description: "A simple task management app that allows users to add, delete, and mark tasks as completed with local storage. The app is built using CSS, React, TypeScript, and it's hosted on AWS Amplify.",
    techUsed: [
      {src: CSS3 , alt: "CSS 3"},
      {src: REACT, alt: "React"},
      {src: TYPESCRIPT, alt: "TypeScript"},
      {src: AMPLIFY, alt: "Amplify"}
    ],
    liveLink: "https://main.d235kuju5iotcj.amplifyapp.com/",
    sourceCodeLink: "https://github.com/vickneee/tasks-typescript-app"
  },
  {
    src: Helppomatka,
    alt: "Helppomatka",
    date: "Mar 2024",
    text: "Helppomatka",
    description: "Using the MERN Stack (MongoDB, Express.js, React.js, and Node.js), we developed a Full Stack web application as a student project at Vantaa Vocational College Varia that is a fictional travel agency website with a booking system.",
    techUsed: [
      {src: TRELLO, alt: "Trello"},
      {src: REACT, alt: "React"},
      {src: NODEJS, alt: "Node.js"},
      {src: EXPRESS, alt: "Express.js"},
      {src: POSTMAN, alt: "Postman"},
      {src: MONGODB, alt: "MongoDB"},
      {src: RENDER, alt: "Render"}
    ],
    liveLink: "https://vickneee-helppomatka.onrender.com/",
    sourceCodeLink: "https://github.com/vickneee/Helppomatka."
  },
  // {
  //   src: MyDiamonds,
  //   alt: "myDiamonds",
  //   date: "Feb 2024",
  //   text: "myDiamonds 💎",
  //   description: "To prevent losing my Diamonds, I created a basic website for my web development resources, so they will be all in one place. 💎",
  //   techUsed: [
  //     {src: HTML5, alt: "HTML 5"},
  //     {src: CSS3, alt: "CSS 3"},
  //     {src: JAVASCRIPT, alt: "JavaScript"},
  //     {src: RENDER, alt: "Render"}
  //   ],
  //   liveLink: "https://mydiamonds.onrender.com/",
  //   sourceCodeLink: "https://github.com/vickneee/myDiamonds"
  // },
  {
    src: MounTours,
    alt: "MounTours",
    date: "Jul 2023",
    text: "MounTours",
    description: "A fictional travel agency UI page. Want to get away from the noise of the town and be surrounded by the beauty of nature? Welcome to Mountours, where we give you all the details you need to organize your upcoming mountain vacation.",
    techUsed: [
      {src: HTML5, alt: "HTML 5"},
      {src: CSS3, alt: "CSS 3"},
      {src: SASS, alt: "Sass"},
      {src: NETLIFY, alt: "Netlify"}
    ],
    liveLink: "https://mountours.netlify.app/",
    sourceCodeLink: "https://github.com/vickneee/mountours"
  },
  {
    src: PortfolioPage,
    alt: "PortfolioPage",
    date: "Jun 2023",
    text: "Portfolio Page",
    description: "A personal portfolio is an online platform that showcases an individual's skills, achievements, and experiences.",
    techUsed: [
      {src: REACT, alt: "React"},
      {src: REACT_BOOTSTRAP, alt: "React Bootstrap"},
      {src: TAILWINDCSS, alt: "Tailwind CSS"},
      {src: NETLIFY, alt: "Netlify"}
    ],
    liveLink: "https://victoriavavulina.netlify.app/",
    sourceCodeLink: "https://github.com/vickneee/react-portfolio-page"
  },
  {
    src: TicTacToe,
    alt: "TicTacToe",
    date: "Apr 2023",
    text: "Tic Tac Toe",
    description: "Tic Tac Toe is a classic strategy game that has gained immense popularity in recent years. The game involves two players who take turns marking a 3x3 grid with Xs and Os until one of the players succeeds in placing three marks.",
    techUsed: [
      {src: HTML5, alt: "HTML 5"},
      {src: CSS3, alt: "CSS 3"},
      {src: JAVASCRIPT, alt: "JavaScript"},
      {src: AMPLIFY, alt: "Amplify"},
      {src: NETLIFY, alt: "Netlify"}
    ],
    liveLink: "https://main.dcegc8v6526c0.amplifyapp.com/",
    sourceCodeLink: "https://github.com/vickneee/tic-tac-toe/"
  }
];

// export default projects;
