import React from "react";
import { View, Text } from "react-native";

export const TopSellingProducts: React.FC = () => {
  return (
    <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
      <Text className="text-lg font-bold text-gray-800 mb-3">
        Top Selling Products
      </Text>
      <View className="flex-row justify-between">
        <View className="h-4 w-24 bg-gray-100 rounded-full" />
      </View>
      <View className="flex-row justify-between mt-3">
        <View className="h-4 w-32 bg-gray-100 rounded-full" />
      </View>
      <View className="flex-row justify-between mt-3">
        <View className="h-4 w-28 bg-gray-100 rounded-full" />
      </View>
    </View>
  );
};
