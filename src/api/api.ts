import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL
})

export const api = {
    sendMessage: async (name: string, email: string, messageText: string) => await instance.post("/sendMessage", {
        name,
        email,
        messageText
    })
}