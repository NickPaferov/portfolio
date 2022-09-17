import React from 'react';
import style from './Navigation.module.scss'

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <a href="" className={style.link}>Home</a>
            <a href="" className={style.link}>Skills</a>
            <a href="" className={style.link}>Projects</a>
            <a href="" className={style.link}>Contacts</a>
        </div>
    );
};

export default Navigation;