import axios from "axios";

const instance = axios.create({
    baseURL: "https://tutornet.herokuapp.com",    
});

export default instance;