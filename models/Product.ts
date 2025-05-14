export interface LowStockProduct {
    name: string;
    quantity: number;
    alertType: "critical";
    icon: React.ReactNode;
    onPressOrder: () => void;
}

export interface TopSellingProduct {
    id: number;
    name: string;
    total_sold: string;
}