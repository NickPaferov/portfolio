import React from 'react';
import style from './Button.module.scss'

type ButtonPropsType = {
    source: string
    text: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <a href={props.source} className={style.btn}>{props.text}</a>
    );
};

export default Button;