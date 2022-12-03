import React, {useState} from 'react';
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import {Fade} from 'react-awesome-reveal';

const Contacts = () => {

    const [offer, setOffer] = useState(false)

    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title text={"Contacts"}/>
                <Fade direction={"down"} className={style.fadeWrapper}>
                    {offer
                        ? <div className={style.offer}>
                            <div className={style.notification}><span>Your message has been sent</span>
                                <br/>
                                <span>I will answer you when I find time</span>
                            </div>
                            <button onClick={() => setOffer(false)}>Ok</button>
                        </div>
                        : <form className={style.contactForm}>
                            <input className={style.input} type={"text"} placeholder={"Name"}/>
                            <input className={style.input} type={"email"} placeholder={"E-mail"}/>
                            <textarea className={style.textarea} placeholder={"Your message"}/>
                            <button type={"submit"}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setOffer(true)
                                    }}>Send message
                            </button>
                        </form>}
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;