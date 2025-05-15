import { LoginModel } from './../models/Auth';
import apiCaller from "utils/apiCaller";

export const login = async (loginModel: LoginModel) => {
    try {
        const response = await apiCaller.post('/auth/login', loginModel);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi đăng nhập:', error);
        throw error;
    }
}