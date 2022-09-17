import React from 'react';
import style from './Projects.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import counterImage from './../assets/images/counter.jpg';
import todoImage from './../assets/images/todolist.jpg';

const Projects = () => {
    const counterStyle = {
        backgroundImage: `url(${counterImage})`
    }
    const todolistStyle = {
        backgroundImage: `url(${todoImage})`
    }
        return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={counterStyle} title={"Counter"} description={"Simple application with settings"}
                             link={"https://nickpaferov.github.io/Counter/"}/>
                    <Project style={todolistStyle}  title={"Todolist"}
                             description={"Customize and expand with more features. Manage projects and organize tasks — all in one place"}
                             link={"https://nickpaferov.github.io/todolist/"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
