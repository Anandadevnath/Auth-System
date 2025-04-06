import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api/users',
    withCredentials: true,
})

const registerUser = (userData) => API.post('/register', userData);
const loginUser = (userData) => API.post('/login', userData);
const logoutUser = () => API.post('/logout');

export { registerUser, loginUser, logoutUser };