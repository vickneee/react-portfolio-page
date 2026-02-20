// Projects
import Figma from "../../assets/img/projects/Figma.png";
import LibraryHub from "../../assets/img/projects/LibraryHub.png";
import AirportSimulator from "../../assets/img/projects/AirportSimulator.png";
import MusaBarberShop from "../../assets/img/projects/MusaBarberShop.png";
import OtaKiinniJosSaat from "../../assets/img/projects/OtaKiinniJosSaat.png";
import TimeAB from "../../assets/img/projects/TimeAB.png";
// import TasksApp from "../../assets/img/projects/TasksApp.png";
import Helppomatka from "../../assets/img/projects/Helppomatka.png";
import MounTours from "../../assets/img/projects/Mountours.png";
import PortfolioPage from "../../assets/img/projects/PortfolioPage.png";
import TicTacToe from "../../assets/img/projects/TicTacToe.png";

// Skills
import TRELLO from "../../assets/img/skills/trello.png";
import JIRA from "../../assets/img/skills/jira.png";
import VSCODE from "../../assets/img/skills/vscode.png";
import WEBSTORM from "../../assets/img/skills/webstorm.png";
import INTELLIJ from "../../assets/img/skills/intellij.png";
import PYCHARM from "../../assets/img/skills/pycharm.png";
import HTML5 from "../../assets/img/skills/html5.png";
import CSS3 from "../../assets/img/skills/css3.png";
import FIGMA from "../../assets/img/skills/figma.png";
import SASS from "../../assets/img/skills/sass.png";
import PYTHON from "../../assets/img/skills/python.svg";
import JAVA from "../../assets/img/skills/java.png";
import JAVAFX from "../../assets/img/skills/javafx.jpg";
import JAVASCRIPT from "../../assets/img/skills/js.svg";
import TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import REACT from "../../assets/img/skills/react-circle.png"
import NEXT from "../../assets/img/skills/next.png";
import REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import TAILWINDCSS from "../../assets/img/skills/tailwindcss.svg";
import NODEJS from "../../assets/img/skills/node-js.png";
import EXPRESS from "../../assets/img/skills/express.svg";
import POSTMAN from "../../assets/img/skills/postman-logo.png";
import SQL from "../../assets/img/skills/mysql.png";
import MONGODB from "../../assets/img/skills/mongo-db.png";
import SUPABASE from "../../assets/img/skills/supabase.svg";
import AMPLIFY from "../../assets/img/skills/amplify.jpeg";
import NETLIFY from "../../assets/img/skills/netlify.png";
import RENDER from "../../assets/img/skills/render.png";

export const projects = [
  {
    src: LibraryHub,
    alt: "LibraryHub",
    date: "Dec 2025",
    text: "LibraryHub",
    description: "LibraryHub is a Next.js-based application developed as a group project during the Software Engineering Project 1 and 2 courses at Metropolia University of Applied Sciences. LibraryHub is an accessible, user-friendly, and efficient digital library catalogue system that simplifies the process of searching, borrowing, and returning books. The project aims to increase the efficiency of the library system by automating routine operations and providing real-time updates on book availability, which supports user engagement and positive outcomes.",
    techUsed: [
      {src: NEXT, alt: "Next.js"},
      {src: TYPESCRIPT, alt: "TypeScript"},
      {src: TAILWINDCSS, alt: "Tailwind CSS"},
      {src: SUPABASE, alt: "Supabase"},
      {src: WEBSTORM, alt: "WebStorm"},
      {src: JIRA, alt: "Jira"},
    ],
    liveLink: "https://www.youtube.com/watch?v=jrJ7c9MOsFE",
    sourceCodeLink: "https://github.com/vickneee/SEP-R1",
  },
  {
    src: Figma,
    alt: "Figma Prototype",
    date: "Nov 2025",
    text: "Figma Prototype",
    description: "Figma Prototype is a student group project created during the User-Centered Design course at Metropolia University of Applied Sciences.",
    techUsed: [
      {src: FIGMA, alt: "Figma"},
    ],
    liveLink: "https://www.figma.com/proto/JdY9yCgnOG6PXx6puV8iEZ/Group-Figma-Prototype?node-id=0-1&t=ABVW3cG8wg6OaULk-1",
    sourceCodeLink: "https://www.figma.com/proto/JdY9yCgnOG6PXx6puV8iEZ/Group-Figma-Prototype?node-id=0-1&t=ABVW3cG8wg6OaULk-1"
  },
  {
    src: AirportSimulator,
    alt: "AirportSimulator",
    date: "May 2025",
    text: "Airport Simulator",
    description: "Airport Simulator is a Java-based application developed as a group project during the Object-Oriented Programming Project course at Metropolia University of Applied Sciences. This project simulates the process of passengers going through an airport. The simulation is based on a queueing model, where passengers arrive at the airport and go through various service points such as check-in, security, passport, and boarding. The simulation allows users to configure various parameters such as arrival time between passengers, number of passengers traveling out of the EU, simulation time, and delay.",
    techUsed: [
      {src: JAVA, alt: "Java"},
      {src: JAVAFX, alt: "JavaFX"},
      {src: MONGODB, alt: "MongoDB"},
      {src: INTELLIJ, alt: "IntellIJ"},
      {src: JIRA, alt: "Jira"}
    ],
    liveLink: "https://www.youtube.com/watch?v=zKhnMIr5bM4",
    sourceCodeLink: "https://github.com/vickneee/airportSimulator",
  },
  {
    src: MusaBarberShop,
    alt: "Musa Barber Shop",
    date: "Mar 2025",
    text: "Musa Barber Shop",
    description: "Musa Barber Shop is a full-stack web application developed as a group project during the Web Development Project course at Metropolia University of Applied Sciences. The application is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The backend is implemented with Node.js and Express.js, while the frontend is developed using React.js.",
    techUsed: [
      {src: REACT, alt: "React"},
      {src: NODEJS, alt: "Node.js"},
      {src: EXPRESS, alt: "Express.js"},
      {src: POSTMAN, alt: "Postman"},
      {src: MONGODB, alt: "MongoDB"},
      {src: WEBSTORM, alt: "WebStorm"},
      {src: TRELLO, alt: "Trello"}
    ],
    liveLink: "https://www.youtube.com/watch?v=0nC7l_O6t7Q",
    sourceCodeLink: "https://github.com/vickneee/WebDev-Project",
  },
  {
    src: OtaKiinniJosSaat,
    alt: "Ota Kiinni Jos Saat lentopeli",
    date: "Dec 2024",
    text: "Ota Kiinni Jos Saat",
    description: "Ota kiinni jos saat was developed as a group project during the Software 1 and 2 courses at Metropolia University of Applied Sciences. Originally developed as a console game, this full-stack application was expanded into a browser-based version. The backend is implemented using Python and a MariaDB database, while the frontend is built with HTML, CSS, and JavaScript technologies. The project also utilizes external APIs, such as Google Maps API and AzureOpenAI GPT-4.",
    techUsed: [
      {src: HTML5, alt: "HTML 5"},
      {src: CSS3, alt: "CSS 3"},
      {src: JAVASCRIPT, alt: "JavaScript"},
      {src: PYTHON, alt: "Python"},
      {src: POSTMAN, alt: "Postman"},
      {src: SQL, alt: "MySQL"},
      {src: PYCHARM, alt: "PyCharm"},
      {src: TRELLO, alt: "Trello"}
    ],
    liveLink: "https://www.youtube.com/watch?v=n1hs_IwryeM",
    sourceCodeLink: "https://github.com/vickneee/ota-kiinni-jos-saat",
  },
  {
    src: TimeAB,
    alt: "TimeAB - Luxury Watches Store",
    date: "Oct 2024",
    text: "TimeAB",
    description: "TimeAB is a basic HTML & CSS school project at Metropolia University of Applied Sciences. It is a fictional luxury watch store UI website, built using basic HTML and CSS. The website is hosted on Netlify, and showcases only the user interface. It has no interactive features or links and is currently not responsive.",
    techUsed: [
      {src: HTML5, alt: "HTML 5"},
      {src: CSS3, alt: "CSS 3"},
      {src: WEBSTORM, alt: "WebStorm"},
      {src: NETLIFY, alt: "Netlify"}
    ],
    liveLink: "https://timeab.netlify.app/",
    sourceCodeLink: "https://github.com/vickneee/timeAB",
  },
  // {
  //   src: TasksApp,
  //   alt: "Tasks App",
  //   date: "Apr 2024",
  //   text: "Tasks App",
  //   description: "A simple task management app that allows users to add, delete, and mark tasks as completed with local storage. The app is built using CSS, React, TypeScript, and it's hosted on AWS Amplify.",
  //   techUsed: [
  //     {src: CSS3 , alt: "CSS 3"},
  //     {src: REACT, alt: "React"},
  //     {src: TYPESCRIPT, alt: "TypeScript"},
  //     {src: AMPLIFY, alt: "Amplify"}
  //   ],
  //   liveLink: "https://main.d235kuju5iotcj.amplifyapp.com/",
  //   sourceCodeLink: "https://github.com/vickneee/tasks-typescript-app"
  // },
  {
    src: Helppomatka,
    alt: "Helppomatka",
    date: "Mar 2024",
    text: "Helppomatka",
    description: "Helppomatka is a student group project: a MERN stack application created at Vantaa Vocational College Varia. It is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project is a fictional travel agency website with a booking system.",
    techUsed: [
      {src: REACT, alt: "React"},
      {src: NODEJS, alt: "Node.js"},
      {src: EXPRESS, alt: "Express.js"},
      {src: POSTMAN, alt: "Postman"},
      {src: MONGODB, alt: "MongoDB"},
      {src: RENDER, alt: "Render"},
      {src: VSCODE, alt: "VSCode"},
      {src: TRELLO, alt: "Trello"}
    ],
    liveLink: "https://vickneee-helppomatka.onrender.com/",
    sourceCodeLink: "https://github.com/vickneee/Helppomatka."
  },
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
      {src: WEBSTORM, alt: "WebStorm"},
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
      {src: WEBSTORM, alt: "WebStorm"},
      {src: NETLIFY, alt: "Netlify"}
    ],
    liveLink: "https://victoriavavulina.netlify.app/",
    sourceCodeLink: "https://github.com/vickneee/react-portfolio-page"
  },
  {
    src: TicTacToe,
    alt: "TicTacToe",
    date: "Apr 2023",
    text: "Tic-Tac-Toe",
    description: "Tic Tac Toe is a classic strategy game that has gained immense popularity in recent years. The game involves two players who take turns marking a 3x3 grid with Xs and Os until one of the players succeeds in placing three marks.",
    techUsed: [
      {src: HTML5, alt: "HTML 5"},
      {src: CSS3, alt: "CSS 3"},
      {src: JAVASCRIPT, alt: "JavaScript"},
      {src: VSCODE, alt: "VSCode"},
      {src: AMPLIFY, alt: "Amplify"},
      {src: NETLIFY, alt: "Netlify"}
    ],
    liveLink: "https://main.dcegc8v6526c0.amplifyapp.com/",
    sourceCodeLink: "https://github.com/vickneee/tic-tac-toe/"
  }
];

// export default projects;
