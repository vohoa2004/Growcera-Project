import axios from 'axios';

const chatbotCaller = axios.create({
    baseURL: process.env.EXPO_PUBLIC_CHATBOT_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default chatbotCaller;