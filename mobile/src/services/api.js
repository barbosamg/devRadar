import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.3:4141',
});

export default api;