import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link} from 'react-scroll';

const BurgerNav = () => {

    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false)
    const onBurgerBtnClick = () => {
        setIsOpenBurgerMenu(!isOpenBurgerMenu)
    }

    return (
        <div className={style.burgerNav}>
            <div className={isOpenBurgerMenu ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
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
            <button className={style.burgerBtn} onClick={onBurgerBtnClick}>{isOpenBurgerMenu ? "X" : "Menu"}</button>
        </div>
    );
};

export default BurgerNav;