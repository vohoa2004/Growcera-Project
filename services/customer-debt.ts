import apiCaller from "utils/apiCaller";

export const getAll = async () => {
    try {
        const response = await apiCaller.get('/customer-debt');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách ghi nợ khách hàng:', error);
        throw error;
    }
}