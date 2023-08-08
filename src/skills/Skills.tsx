import React from 'react';
import style from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsImage from "../assets/images/js.jpg";
import tsImage from "../assets/images/ts.jpg";
import reactImage from "../assets/images/react.png";
import reduxImage from "../assets/images/redux.jpg";
import mobXImage from "../assets/images/mobX.png";
import axiosImage from "../assets/images/axios.png";
import restApiImage from "../assets/images/restAPI.png";
import reactHookFormImage from "../assets/images/reactHookForm.png";
import formikImage from "../assets/images/formik.jpg";
import reactRouterDomImage from "../assets/images/reactRouterDom.png";
import htmlImage from "../assets/images/html5.png";
import cssImage from "../assets/images/css3.png";
import sassImage from "../assets/images/sass.jpg"
import styledComponentsImage from "../assets/images/styledComponents.png";
import muiImage from "../assets/images/mui.png";
import antDesignImage from "../assets/images/antDesign.png";
import reactBootstrapImage from "../assets/images/reactBootstrap.png";
import storybookImage from "../assets/images/storybook.png";
import postmanImage from "../assets/images/postman.png";
import gitImage from "../assets/images/git.png";
import vercelImage from "../assets/images/vercel.png";
import dockerImage from "../assets/images/docker.png";
import webSocketImage from "../assets/images/webSocket.png";
import socketIoImage from "../assets/images/socketIO.png";
import reactLeafletImage from "../assets/images/reactLeaflet.png";
import {Fade} from 'react-awesome-reveal';
import {v1} from 'uuid';

const Skills = () => {

    const skills = [
        {
            id: v1(),
            title: "JavaScript",
            description: " JavaScript is a scripting language for creating dynamic web page content",
            style: {
                backgroundImage: `url(${jsImage})`
            }
        },
        {
            id: v1(),
            title: "TypeScript",
            description: "TypeScript is a strongly typed programming language that builds on JavaScript",
            style: {
                backgroundImage: `url(${tsImage})`
            }
        },
        {
            id: v1(),
            title: "React",
            description: "React is a JavaScript library for building user interfaces",
            style: {
                backgroundImage: `url(${reactImage})`
            }
        },
        {
            id: v1(),
            title: "Redux",
            description: "Redux is a predictable state container for JavaScript apps",
            style: {
                backgroundImage: `url(${reduxImage})`
            }
        },
        {
            id: v1(),
            title: "MobX",
            description: "MobX is a simple, scalable and battle tested state management solution",
            style: {
                backgroundImage: `url(${mobXImage})`
            }
        },
        {
            id: v1(),
            title: "Axios",
            description: "Axios is a promise based HTTP client for the browser and node.js",
            style: {
                backgroundImage: `url(${axiosImage})`
            }
        },
        {
            id: v1(),
            title: "REST API",
            description: "REST API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data",
            style: {
                backgroundImage: `url(${restApiImage})`
            }
        },
        {
            id: v1(),
            title: "Postman",
            description: "Postman is an API platform for building and using APIs",
            style: {
                backgroundImage: `url(${postmanImage})`
            }
        },
        {
            id: v1(),
            title: "React Hook Form",
            description: "React Hook Form is a library that helps you validate forms in React",
            style: {
                backgroundImage: `url(${reactHookFormImage})`
            }
        },
        {
            id: v1(),
            title: "Formik",
            description: "Formik is a small group of React components and hooks for building forms in React and React Native",
            style: {
                backgroundImage: `url(${formikImage})`
            }
        },
        {
            id: v1(),
            title: "React Router DOM",
            description: "React Router DOM is an npm package that enables you to implement dynamic routing in a web app",
            style: {
                backgroundImage: `url(${reactRouterDomImage})`
            }
        }, {
            id: v1(),
            title: "HTML5",
            description: "HTML is the standard markup language for documents designed to be displayed in a web browser",
            style: {
                backgroundImage: `url(${htmlImage})`
            }
        },
        {
            id: v1(),
            title: "CSS3",
            description: "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML",
            style: {
                backgroundImage: `url(${cssImage})`
            }
        },
        {
            id: v1(),
            title: "Sass",
            description: "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world",
            style: {
                backgroundImage: `url(${sassImage})`
            }
        },
        {
            id: v1(),
            title: "Styled Components",
            description: "Styled Components is a popular library that is used to style React applications",
            style: {
                backgroundImage: `url(${styledComponentsImage})`
            }
        },
        {
            id: v1(),
            title: "Material UI",
            description: "Material UI is an open-source React component library that implements Google's Material Design",
            style: {
                backgroundImage: `url(${muiImage})`
            }
        },
        {
            id: v1(),
            title: "Ant Design",
            description: "Ant Design is a UI component library allowing developers to quickly create beautiful and functional user interfaces for web applications",
            style: {
                backgroundImage: `url(${antDesignImage})`
            }
        },
        {
            id: v1(),
            title: "React-Bootstrap",
            description: "React-Bootstrap is a complete re-implementation of the Bootstrap components using React",
            style: {
                backgroundImage: `url(${reactBootstrapImage})`
            }
        },
        {
            id: v1(),
            title: "Storybook",
            description: "Storybook is a frontend workshop for building UI components and pages in isolation",
            style: {
                backgroundImage: `url(${storybookImage})`
            }
        },
        {
            id: v1(),
            title: "Git",
            description: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency",
            style: {
                backgroundImage: `url(${gitImage})`
            }
        },
        {
            id: v1(),
            title: "Vercel",
            description: "Vercel is a cloud platform for static websites and dynamic applications",
            style: {
                backgroundImage: `url(${vercelImage})`
            }
        },
        {
            id: v1(),
            title: "Docker",
            description: "Docker is an open platform for developing, shipping, and running applications",
            style: {
                backgroundImage: `url(${dockerImage})`
            }
        },
        {
            id: v1(),
            title: "WebSocket",
            description: "WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection",
            style: {
                backgroundImage: `url(${webSocketImage})`
            }
        },
        {
            id: v1(),
            title: "Socket.IO",
            description: "Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server",
            style: {
                backgroundImage: `url(${socketIoImage})`
            }
        },
        {
            id: v1(),
            title: "React Leaflet",
            description: "React Leaflet is an open-source Javascript library for creating maps",
            style: {
                backgroundImage: `url(${reactLeafletImage})`
            }
        },
    ]

    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Fade direction={"down"}>
                        {skills.map(skill =>
                            <Skill key={skill.id}
                                   style={skill.style}
                                   title={skill.title}
                                   description={skill.description}/>
                        )}
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skills;