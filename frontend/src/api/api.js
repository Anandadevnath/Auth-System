import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api/users',
    withCredentials: true,
})

const registerUser = (userData) => API.post('/register', userData);

export {registerUser}