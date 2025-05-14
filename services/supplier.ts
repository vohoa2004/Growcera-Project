import apiCaller from "utils/apiCaller";

export const getAll = async () => {
    try {
        const response = await apiCaller.get('/suppliers');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách nhà cung cấp:', error);
        throw error;
    }
}