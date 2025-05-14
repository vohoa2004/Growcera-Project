import * as React from "react";
import { View, TextInput, Image } from "react-native";

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
}

const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
    return (
        <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2">
            <View className="mr-2">
                <Image
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/11dd31cdeb691da3a0111f88fd35ef7b13621876?placeholderIfAbsent=true" }}
                    className="w-5 h-5"
                    accessibilityLabel="Search icon"
                />
            </View>
            <TextInput
                className="flex-1 text-gray-700"
                placeholder="Search products..."
                placeholderTextColor="#9CA3AF"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

export default SearchBar;
