import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { LowStockAlert } from "./LowStockAlert";
import { ErrorIcon, WarningIcon } from "./SVGIcons";
import { LowStockProduct } from "models/Product";
import { getLowStocks } from "services/product";

interface LowStockAlertsProps {
  onPressOrder: (productId: string) => void;
}

export const LowStockAlerts: React.FC<LowStockAlertsProps> = ({
  onPressOrder,
}) => {
  const [lowStockProducts, setLowStockProducts] = React.useState<LowStockProduct[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getLowStocks();
        setLowStockProducts(response)
      } catch (error) {
        console.error("Lỗi khi lấy danh sách low stock products:", error)
      }
    }
    fetchTransactions()
  }, [])
  return (
    <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
      <Text className="text-lg font-bold text-gray-800 mb-3">
        Low Stock Alerts
      </Text>
      <View>
        {lowStockProducts.map((product, index) => (
          <LowStockAlert
            name={product.name}
            quantity={product.quantity}
            alertType="critical"
            icon={<ErrorIcon />}
            onPressOrder={() => onPressOrder(product.name)}
          />
        ))}


      </View>
    </View>
  );
};
