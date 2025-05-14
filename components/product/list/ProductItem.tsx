import * as React from "react";
import { View, Text, Image } from "react-native";

interface ProductItemProps {
    name: string;
    stock: number;
    expiryDate: string;
    hasImage: boolean;
    imageUrl: string;
}

const ProductItem = ({
    name,
    stock,
    expiryDate,
    hasImage,
    imageUrl
}: ProductItemProps) => {
    return (
        <View className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <View className="flex-row justify-between">
                <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">{name}</Text>
                    <Text className="text-sm text-gray-600 mt-1">Stock: {stock} units</Text>

                    <View className="flex-row items-center mt-2">
                        <View className="mr-2">
                            <Image
                                source={{ uri: stock < 15 ? "https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/18a168fe772737b601b5aaf64c47af90ed1a3ac6?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/baf6844bea53606bb4ff5c11e9348a865041ad94?placeholderIfAbsent=true" }}
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
        </View>
    );
};

export default ProductItem;
