import React from 'react';
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import {Fade} from 'react-awesome-reveal';

const Contacts = () => {
    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title text={"Contacts"}/>
                <Fade direction={"down"} className={style.fadeWrapper}>
                    <form className={style.contactForm}>
                        <input className={style.input} type={"text"} placeholder={"Name"}/>
                        <input className={style.input} type={"email"} placeholder={"E-mail"}/>
                        <textarea className={style.textarea} placeholder={"Your message"}> </textarea>
                        <button type={"submit"}>Send message</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;