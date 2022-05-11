import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Nikolai Paferov</h2>
                <div className={style.iconContainer}>
                    <div className={style.icon}> </div>
                    <div className={style.icon}> </div>
                    <div className={style.icon}> </div>
                    <div className={style.icon}> </div>
                </div>
                <h2 className={style.title}>© 2022 All rights reserved</h2>
            </div>
        </div>
    );
};

export default Footer;