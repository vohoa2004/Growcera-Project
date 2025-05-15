import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface ProductCardProps {
    imageUrl: string;
    name: string;
    price: string;
}

const ProductCard = ({ imageUrl, name, price }: ProductCardProps) => {
    return (
        <TouchableOpacity className="w-[48%] mb-4">
            <Image
                source={{ uri: imageUrl }}
                className="w-full h-32 rounded-lg mb-2"
                resizeMode="cover"
            />
            <View>
                <Text className="font-medium text-gray-800">{name}</Text>
            </View>
            <View>
                <Text className="text-[#38B000] font-bold">{price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;
