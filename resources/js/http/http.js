import axios from "axios";


const http  = axios.create({
    baseURL: ' https://random-data-api.com/api/v2'
});

export default http;