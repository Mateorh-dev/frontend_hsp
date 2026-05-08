import axios from "axios";

const host = "http://20.151.96.248:8000/";
const api = axios.create({
    baseURL: host,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
});

export default api;