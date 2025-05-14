import { LowStockProduct } from "models/Product";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const LowStockAlert: React.FC<LowStockProduct> = ({
  name,
  quantity,
  alertType,
  icon,
  onPressOrder,
}) => {
  return (
    <View className="flex-row justify-between items-center bg-white p-3 rounded-lg mb-3">
      <View className="flex-row items-center">
        <View
          className={`p-2 rounded-full ${alertType === "critical" ? "bg-red-50" : "bg-yellow-50"} mr-3`}
        >
          {icon}
        </View>
        <View>
          <Text className="font-medium text-gray-800">{name}</Text>
          <Text className="text-gray-500 text-sm">
            Only {quantity} units left
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPressOrder}
        className="bg-gray-100 py-2 px-4 rounded-lg"
      >
        <Text className="text-gray-700 font-medium">Order</Text>
      </TouchableOpacity>
    </View>
  );
};
