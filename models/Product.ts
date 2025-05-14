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

export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    expiry_date: string;
    hasImage: boolean;
    category: string;
    imageUrl: string;
}