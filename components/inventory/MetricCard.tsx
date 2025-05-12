import React from "react";
import { View, Text } from "react-native";

interface MetricCardProps {
  title: string;
  value: string;
  changeText: string;
  icon: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  changeText,
  icon,
}) => {
  return (
    <View className="bg-white rounded-xl p-4 shadow-sm flex-1 mr-2">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-gray-500 font-medium">{title}</Text>
        <View>{icon}</View>
      </View>
      <Text className="text-2xl font-bold text-gray-800 mb-1">{value}</Text>
      <Text className="text-green-600 text-xs">{changeText}</Text>
    </View>
  );
};
