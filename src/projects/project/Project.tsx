import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
            <button className={style.button}>Show</button>
            </div>
            <div className={style.descriptionBlock}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Project;