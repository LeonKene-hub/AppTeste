import axios from "axios";

const portaApi = "5112";
//porta 5112 (casa)

const ip = "192.168.56.1"
//ip casa 192.168.56.1

const apiUrlLocal = `http://${ip}:${portaApi}/api`;
//http://192.168.56.1:5112/api

const api = axios.create({
    baseURL : apiUrlLocal
});

export default api