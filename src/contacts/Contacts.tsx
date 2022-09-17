import React from 'react';
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title text={"Contacts"}/>
                <form className={style.contactForm}>
                    <input className={style.input} type={"text"} placeholder={"Name"}/>
                    <input className={style.input} type={"email"} placeholder={"E-mail"}/>
                    <textarea className={style.textarea} placeholder={"Your message"}> </textarea>
                    <button type={"submit"}>Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;