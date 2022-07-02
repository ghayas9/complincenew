import axios from 'axios';
const instance = axios.create({
// .. where we make our configurations
    // baseURL: 'https://192.168.100.16:9000'
    baseURL: 'https://testing-backend-1.herokuapp.com'
    // baseURL: 'http://localhost:9000'
});

export default instance;