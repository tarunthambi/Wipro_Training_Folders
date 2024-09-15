import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', 
    timeout: 1000,
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


export const getMessages = () => {
    return api.get('/api/messages');
};

export const login = (credentials) => {
    return api.post('/api/auth/login', credentials);
};

export const register = (userInfo) => {
    return api.post('/api/auth/register', userInfo);
};


