import * as React from "react";
import { View, Text, Image } from "react-native";

const ProductHeader = () => {
    return (
        <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-bold text-gray-800">Products</Text>
            <Image
                source={{ uri: "https://img.icons8.com/glyph-neue/64/40C057/product.png" }}
                className="w-6 h-6"
                accessibilityLabel="Products icon"
            />
        </View>
    );
};

export default ProductHeader;
