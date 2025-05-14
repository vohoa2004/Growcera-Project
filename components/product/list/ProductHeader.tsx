import * as React from "react";
import { View, Text, Image } from "react-native";

const ProductHeader = () => {
    return (
        <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-bold text-gray-800">Products</Text>
            <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/5612fe6af34f9a2a540ed5cfacda875d02fdd802?placeholderIfAbsent=true" }}
                className="w-6 h-6"
                accessibilityLabel="Products icon"
            />
        </View>
    );
};

export default ProductHeader;
