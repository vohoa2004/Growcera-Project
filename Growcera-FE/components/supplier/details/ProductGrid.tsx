import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductCard from './ProductCard';

interface Product {
    id: string;
    image: string;
    name: string;
    price: string;
}

interface ProductGridProps {
    products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <View className="px-4 py-6">
            <View className="mb-4">
                <Text className="text-lg font-bold text-gray-800">Available Products</Text>
            </View>
            <View>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <ProductCard
                            imageUrl={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    scrollEnabled={false}
                />
            </View>
        </View>
    );
};

export default ProductGrid;
