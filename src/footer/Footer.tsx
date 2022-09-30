import React from 'react';
import style from './Footer.module.scss'
import codeWarsImage from './../assets/images/codewars.png'
import freeCodeCampImage from './../assets/images/freecodecamp.jpg'
import gitHubImage from './../assets/images/github.png'
import telegramImage from './../assets/images/telegram.jpg'
import Social from "./social/Social";
import Title from '../common/components/title/Title';

const Footer = () => {
    const codewarsStyle = {
        backgroundImage: `url(${codeWarsImage})`
    }
    const freeCodeCampStyle = {
        backgroundImage: `url(${freeCodeCampImage})`
    }
    const gitHubStyle = {
        backgroundImage: `url(${gitHubImage})`
    }
    const telegramStyle = {
        backgroundImage: `url(${telegramImage})`
    }

    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <Title text={"Nikolai Paferov"}/>
                <div className={style.socialIcons}>
                    <Social style={codewarsStyle} platform={"Codewars"}
                            link={"https://www.codewars.com/users/NickPaferov"}/>
                    <Social style={freeCodeCampStyle} platform={"FCC"}
                            link={"https://www.freecodecamp.org/NickPaferov"}/>
                    <Social style={gitHubStyle} platform={"GitHub"}
                            link={"https://github.com/NickPaferov"}/>
                    <Social style={telegramStyle} platform={"Telegram"}
                            link={"https://t.me/NickPaferov"}/>
                </div>
                <span className={style.copyRight}>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;