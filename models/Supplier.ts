export interface Supplier {
    id: number;
    name: string;
    address: string;
    phone: string;
    imageUrl: string;
    rating: number;
    onViewDetails: () => void;
}

export interface SupplierDetails {
    id: number;
    name: string;
    email: string;
    phone: string;
    imageUrl: string;
    address: string;
    rating: number;
    latitude: number;
    longitude: number;
    products: SupplierProduct[];
}

export interface SupplierProduct {
    id: number;
    code: string;
    name: string;
    description: string;
    unit: string;
    unit_price: number;
    image_url: string;
}