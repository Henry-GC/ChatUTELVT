import axios from "axios"

const instance = axios.create({
    baseURL:"http://localhost:5000",
    headers:{
        "Content-Type": "application/json"
    },
    withCredentials: true
})

export default instance

// https://api-chat-utelvt.vercel.app
// http://localhost:5000