import React from 'react';
import style from './Navigation.module.scss';
import {Link} from 'react-scroll';

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <Link className={style.link} activeClass={style.active} to="main" spy={true} smooth={true}
                  duration={500}>
                Main </Link>
            <Link className={style.link} activeClass={style.active} to="skills" spy={true} smooth={true}
                  duration={500}>
                Skills
            </Link>
            <Link className={style.link} activeClass={style.active} to="projects" spy={true} smooth={true}
                  duration={500}>
                Projects
            </Link>
            <Link className={style.link} activeClass={style.active} to="contacts" spy={true} smooth={true}
                  duration={500}>
                Contacts
            </Link>
        </div>
    );
};

export default Navigation;