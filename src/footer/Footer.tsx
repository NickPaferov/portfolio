import React from 'react';
import style from './Footer.module.scss'
import codeWarsImage from './../assets/images/codewars.png'
import freeCodeCampImage from './../assets/images/freecodecamp.jpg'
import gitHubImage from './../assets/images/github.png'
import telegramImage from './../assets/images/telegram.jpg'
import Social from "./social/Social";
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import {v1} from 'uuid';

const Footer = () => {

    const socials = [
        {
            id: v1(),
            platform: "Codewars",
            link: "https://www.codewars.com/users/NickPaferov",
            style: {
                backgroundImage: `url(${codeWarsImage})`
            }
        },
        {
            id: v1(),
            platform: "FCC",
            link: "https://www.freecodecamp.org/NickPaferov",
            style: {
                backgroundImage: `url(${freeCodeCampImage})`
            }
        },
        {
            id: v1(),
            platform: "GitHub",
            link: "https://github.com/NickPaferov",
            style: {
                backgroundImage: `url(${gitHubImage})`
            }
        },
        {
            id: v1(),
            platform: "Telegram",
            link: "https://t.me/NickPaferov",
            style: {
                backgroundImage: `url(${telegramImage})`
            }
        },

    ]

    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <Title text={"Nikolai Paferov"}/>
                <div className={style.socialIcons}>
                    <Fade direction={"down"}>
                        {socials.map(social =>
                            <Social key={social.id}
                                    style={social.style}
                                    platform={social.platform}
                                    link={social.link}/>
                        )}
                    </Fade>
                </div>
                <span className={style.copyRight}>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;