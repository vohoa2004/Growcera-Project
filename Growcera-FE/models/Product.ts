export interface LowStockProduct {
    id: number;
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

export interface ProductDetails {
    product: ProductDetailsProp;
    batches: Batch[];
}

export interface ProductDetailsProp {
    product_id: number;
    code: string;
    name: string;
    unit: string;
    unit_price: number;
    quantity: number;
    hasImage: boolean;
    category: string;
    imageUrl: string;
    description: string;
}

export interface Batch {
    batch_id: number;
    batch_code: string;
    quantity: number;
    expiration_date: string;
}