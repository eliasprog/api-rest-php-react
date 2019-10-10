import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/api-rest-php/api'
});

export default api;
