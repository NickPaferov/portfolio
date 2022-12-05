import React, {useState} from 'react';
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import {Fade} from 'react-awesome-reveal';
import * as yup from "yup";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';

interface IFormInputs {
    name: string
    email: string
    messageText: string
}

const schema = yup.object({
    name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters").max(30, "Name must be at most 30 characters"),
    email: yup.string().required("E-mail is required").email("Invalid e-mail"),
    messageText: yup.string().required("Message is required").min(10, "Message must be at least 10 characters").max(500, "Message must be at most 500 characters"),
})

const Contacts = () => {

    const [notification, setNotification] = useState<null | string>(null)
    const [isDisabled, setIsDisabled] = useState(false)

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });


    const onSubmit = async ({name, email, messageText}: IFormInputs) => {
        setNotification("Letter is sending...")
        setIsDisabled(true)
        try {
            await axios.post("http://localhost:3010/sendMessage", {name, email, messageText})
            setNotification("Your message has been sent. I will answer you when I find time.")
            reset()
        } catch (error: any) {
            setNotification(`${error.message}. Try later.`)
        } finally {
            setIsDisabled(false)
        }
    }

    const noticeBtn = isDisabled ? style.disabledBtn : style.activeBtn

    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title text={"Contacts"}/>
                <Fade direction={"down"} className={style.fadeWrapper}>
                    {notification
                        ? <div className={style.notificationForm}>
                            <div className={style.notification}>{notification}</div>
                            <button className={noticeBtn}
                                    onClick={() => setNotification(null)}
                                    disabled={isDisabled}>Ok
                            </button>
                        </div>
                        : <form className={style.contactForm} onSubmit={handleSubmit(onSubmit)}>
                            <input className={style.input} placeholder={"Name"}
                                   {...register("name")}/>
                            {errors.name ? <div className={style.error}>{errors.name.message}</div> :
                                <div className={style.space}>{}</div>}
                            <input className={style.input} placeholder={"E-mail"}
                                   {...register("email")}/>
                            {errors.email ? <div className={style.error}>{errors.email.message}</div> :
                                <div className={style.space}>{}</div>}
                            <textarea className={style.textarea} placeholder={"Your message"}
                                      {...register("messageText")}/>
                            {errors.messageText ? <div className={style.error}>{errors.messageText.message}</div> :
                                <div className={style.space}>{}</div>}
                            <button type={"submit"}>Send message</button>
                        </form>}
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;