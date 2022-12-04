import React, {useState} from 'react';
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import {Fade} from 'react-awesome-reveal';
import {useFormik} from 'formik';
import axios from 'axios';

const Contacts = () => {

    const [notification, setNotification] = useState<null | string>(null)
    const [isDisabled, setIsDisabled] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        onSubmit: async ({name, email, message}) => {
            setNotification("Letter is sending...")
            setIsDisabled(true)
            try {
                await axios.post("http://localhost:3010/sendMessage", {name, email, message})
                setNotification("Your message has been sent. I will answer you when I find time.")
                formik.resetForm()
            } catch (error: any) {
                setNotification(`${error.message}. Try later.`)
            } finally {
                setIsDisabled(false)
            }
        },
    })

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
                        : <form className={style.contactForm} onSubmit={formik.handleSubmit}>
                            <input className={style.input}
                                   id="name"
                                   name="name"
                                   type={"text"}
                                   placeholder={"Name"}
                                   onChange={formik.handleChange}
                                   value={formik.values.name}/>
                            <input className={style.input}
                                   id="email"
                                   name="email"
                                   type={"email"}
                                   placeholder={"E-mail"}
                                   onChange={formik.handleChange}
                                   value={formik.values.email}/>
                            <textarea className={style.textarea}
                                      id="message"
                                      name="message"
                                      placeholder={"Your message"}
                                      onChange={formik.handleChange}
                                      value={formik.values.message}/>
                            <button type={"submit"}>Send message</button>
                        </form>}
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;