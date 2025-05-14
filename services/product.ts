import apiCaller from "utils/apiCaller";

export const getAll = async () => {
    try {
        const response = await apiCaller.get('/products');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        throw error;
    }
}

export const getLowStocks = async () => {
    try {
        const response = await apiCaller.get('/products/low-stock');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm low stock:', error);
        throw error;
    }
}