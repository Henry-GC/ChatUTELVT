import axios from "axios";

const instance = axios.create({
    baseURL:"https://api-chat-utelvt.vercel.app",
    headers:{
        "Content-Type": "application/json"
    },
    withCredentials: true
})

export default instance

// https://api-chat-utelvt.vercel.app
// http://localhost:5000