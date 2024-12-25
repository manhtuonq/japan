import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_API_URL;

if (!baseURL) {
    throw new Error('VITE_BACKEND_API_URL is not set');
}

const api = axios.create({
    baseURL: baseURL
});

export default api;
