import React from 'react';
import style from './Projects.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import socialNetworkImage from './../assets/images/social-network.jpg';
import todoImage from './../assets/images/todolist.png';
import cardsImage from './../assets/images/cards.jpg';
import {Fade} from 'react-awesome-reveal';
import {v1} from 'uuid';

const Projects = () => {

    const projects = [
        {
            id: v1(),
            title: "Social network",
            description: "Media platform to get and stay connected with friends",
            link: "https://nickpaferov.github.io/social-network/",
            style: {
                backgroundImage: `url(${socialNetworkImage})`
            }
        },
        {
            id: v1(),
            title: "Todolist",
            description: "Manage projects and organize tasks — all in one place",
            link: "https://nickpaferov.github.io/todolist",
            style: {
                backgroundImage: `url(${todoImage})`
            }
        },
        {
            id: v1(),
            title: "Cards",
            description: "Answer questions and gain new knowledge",
            link: "https://nickpaferov.github.io/learning-cards",
            style: {
                backgroundImage: `url(${cardsImage})`
            }
        }
    ]

    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Fade direction={"down"}>
                        {projects.map(project =>
                            <Project key={project.id}
                                     style={project.style}
                                     title={project.title}
                                     description={project.description}
                                     link={project.link}/>)}
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Projects;
