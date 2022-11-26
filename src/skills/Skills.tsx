import React from 'react';
import style from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsTsImage from "../assets/images/jsTs.jpg";
import reactImage from "../assets/images/react.jpg";
import reduxImage from "../assets/images/redux.jpg";
import {Fade} from 'react-awesome-reveal';

const Skills = () => {
    const jsTsStyle = {
        backgroundImage: `url(${jsTsImage})`
    }
    const reactStyle = {
        backgroundImage: `url(${reactImage})`
    }
    const reduxStyle = {
        backgroundImage: `url(${reduxImage})`
    }
    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Fade direction={"down"}>
                        <Skill style={jsTsStyle} title={"JS/TS"} description={"JavaScript and TypeScript"}/>
                        <Skill style={reactStyle} title={"React"}
                               description={"React is a JavaScript library for building user interfaces"}/>
                        <Skill style={reduxStyle} title={"Redux"}
                               description={"Redux is a predictable state container for JavaScript apps"}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skills;