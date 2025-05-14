export interface Sale {
    // id: number;
    // customer_name: string;
    // customer_phone: string;
    // paid_amount: string;
    // debt: string;
    // created_at: string,
    // seller_id: number;
    type: string;
    total_amount: string;
    created_at: string;
}

export interface TodayRevenue {
    revenue: number;
}

export interface TodayOrders {
    total_orders: number;
}
