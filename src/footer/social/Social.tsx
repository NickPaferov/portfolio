import React from 'react';
import style from './Social.module.scss'


type SocialPropsType = {
    style: { backgroundImage: string }
    platform: string
    link: string
}

const Social = (props: SocialPropsType) => {
    return (
        <div className={style.platformContainer}>
            <a className={style.socialIcon} style={props.style} href={props.link}> </a>
            <a className={style.platform} href={props.link}>{props.platform}</a>
        </div>
    );
};

export default Social;