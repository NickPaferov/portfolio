import React from 'react';
import style from './Header.module.scss'
import Navigation from "../navigation/Navigation";
import BurgerNav from "../navigation/BurgerNav";

const Header = () => {
    return (
        <div className={style.header}>
            <Navigation/>
            <BurgerNav/>
        </div>
    );
};

export default Header;