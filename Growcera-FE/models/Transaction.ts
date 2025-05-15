export interface Sale {
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

export interface CashFlow {
    label: string;
    amount: string;
    percentage: string;
}

export interface MonthRevenue {
    month: number;
    revenue: string;
}

export interface MonthProfit {
    revenue: string;
    total_cost: string;
    profit: string
}

export interface RatioProfit {
    ratio: number
}

export interface RatioRevenue {
    ratio: number
}

