import React from 'react';
import Button from '../../common/components/button/Button';
import style from './Project.module.scss'

type ProjectPropsType = {
    style: { backgroundImage: string }
    title: string
    description: string
    link: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <Button source={props.link} text={"View"}/>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;