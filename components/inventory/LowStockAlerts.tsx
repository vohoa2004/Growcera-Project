import React from "react";
import { View, Text } from "react-native";
import { LowStockAlert } from "./LowStockAlert";
import { ErrorIcon, WarningIcon } from "./SVGIcons";

interface LowStockAlertsProps {
  onPressOrder: (productId: string) => void;
}

export const LowStockAlerts: React.FC<LowStockAlertsProps> = ({
  onPressOrder,
}) => {
  return (
    <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
      <Text className="text-lg font-bold text-gray-800 mb-3">
        Low Stock Alerts
      </Text>
      <View>
        <LowStockAlert
          productName="Product A"
          stockCount={2}
          alertType="critical"
          icon={<ErrorIcon />}
          onPressOrder={() => onPressOrder("productA")}
        />
        <LowStockAlert
          productName="Product B"
          stockCount={5}
          alertType="warning"
          icon={<WarningIcon />}
          onPressOrder={() => onPressOrder("productB")}
        />
      </View>
    </View>
  );
};
