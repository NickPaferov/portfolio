import React from 'react';
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
};

export default Navigation;