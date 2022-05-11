import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"Counter"} description={"Simple application with settings"}/>
                    <Project title={"Todolist"} description={"Customize and expand with more features. Manage projects and organize tasks — all in one place"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
