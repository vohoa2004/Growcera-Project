import axios from 'axios';

const apiCaller = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default apiCaller;
