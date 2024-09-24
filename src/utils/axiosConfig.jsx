import axios from "axios";

const instance = axios.create({
    baseURL:"https://api-chatutelvt.onrender.com",
    headers:{
        "Content-Type": "application/json"
    }
})

export default instance

// https://api-chatutelvt.onrender.com