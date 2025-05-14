import apiCaller from "utils/apiCaller";

export const getAllSales = async () => {
    try {
        const response = await apiCaller.get('/sales');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách bán hàng:', error);
        throw error;
    }
}

export const getLatestSales = async () => {
    try {
        const response = await apiCaller.get('/sales/latest');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách bán hàng:', error);
        throw error;
    }
}

export const getTodayRevenue = async () => {
    try {
        const response = await apiCaller.get('/sales/revenue/today');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy doanh thu hôm nay:', error);
        throw error;
    }
}

export const getTodayOrderCount = async () => {
    try {
        const response = await apiCaller.get('/sales/order-count/today');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy số lượng đơn đặt:', error);
        throw error;
    }
}

export const getTopSellingProducts = async () => {
    try {
        const response = await apiCaller.get('/sales/top-products');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách top mặt hàng bán chạy nhất:', error);
        throw error;
    }
}