import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface ProductItemProps {
    id: number;
    name: string;
    stock: number;
    expiryDate: string;
    hasImage: boolean;
    imageUrl: string;
    onPress: (id: number) => void;
}

const ProductItem = ({
    id,
    name,
    stock,
    expiryDate,
    hasImage,
    imageUrl,
    onPress
}: ProductItemProps) => {
    return (
        <TouchableOpacity 
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            onPress={() => onPress(id)}
            activeOpacity={0.7}
        >
            <View className="flex-row justify-between">
                <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">{name}</Text>
                    <Text className="text-sm text-gray-600 mt-1">Stock: {stock} units</Text>

                    <View className="flex-row items-center mt-2">
                        <View className="mr-2">
                            <Image
                                source={{ uri: stock < 15 ? "https://img.icons8.com/ios/50/40C057/new-product.png" : "https://img.icons8.com/ios-filled/50/40C057/product.png" }}
                                className="w-4 h-4"
                                accessibilityLabel="Expiry icon"
                            />
                        </View>
                        <Text className="text-sm text-gray-500">Expires: {expiryDate}</Text>
                    </View>
                </View>

                {hasImage && (
                    <Image
                        source={{ uri: imageUrl }}
                        className="w-20 h-20 rounded"
                        accessibilityLabel={`${name} image`}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default ProductItem;
