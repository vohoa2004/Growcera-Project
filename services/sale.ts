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

export const getMonthRevenue = async () => {
    try {
        const response = await apiCaller.get('/sales/revenue/month');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy doanh thu tháng:', error);
        throw error;
    }
}

export const getRevenueRatio = async () => {
    try {
        const response = await apiCaller.get('/sales/ratio/revenue');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy tỉ lệ tăng doanh thu:', error);
        throw error;
    }
}

export const getMonthProfit = async () => {
    try {
        const response = await apiCaller.get('/sales/profit/month');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy lợi nhuận tháng:', error);
        throw error;
    }
}

export const getProfitRatio = async () => {
    try {
        const response = await apiCaller.get('/sales/ratio/profit');
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy tỉ lệ tăng lợi nhuận:', error);
        throw error;
    }
}