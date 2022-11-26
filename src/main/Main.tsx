import React from 'react';
import {Fade} from 'react-awesome-reveal';
import style from './Main.module.scss';
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from 'react-typing-effect';
import {Particle} from "../common/components/particle/Particle";

const Main = () => {
    return (
        <div id={"main"} className={style.mainBlock}>
            <Particle/>
            <Fade direction={"down"} className={style.fadeWrapper}>
                <div className={style.mainContainer}>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <span>I am <span>Nikolai Paferov</span></span>
                        <ReactTypingEffect
                            text={"Frontend Developer"} speed={300} eraseSpeed={300} eraseDelay={3000}
                            typingDelay={1500}
                        />
                    </div>
                    <Tilt>
                        <div className={style.photo}>
                            <div className={style.image}>

                            </div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
};

export default Main;