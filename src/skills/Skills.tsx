import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {/*<Skill title={"HTML"} description={"HyperText Markup Language"}/>*/}
                    {/*<Skill title={"CSS"} description={"Cascading Style Sheets"}/>*/}
                    <Skill title={"JS/TS"} description={"JavaScript/TypeScript"}/>
                    <Skill title={"React"} description={"React is a JavaScript library for building user interfaces"}/>
                    <Skill title={"Redux"} description={"Redux is a predictable state container for JavaScript apps"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;