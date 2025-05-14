export interface Supplier {
    id: number;
    name: string;
    address: string;
    phone: string;
    imageUrl: string;
    rating: number;
    onViewDetails: () => void;
}