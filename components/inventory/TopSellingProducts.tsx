import { TopSellingProduct } from "models/Product";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getTopSellingProducts } from "services/sale";

export const TopSellingProducts: React.FC = () => {
  const [topSellingProducts, setTopSellingProducts] = useState<TopSellingProduct[]>([])

  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      try {
        const response = await getTopSellingProducts();
        setTopSellingProducts(response)
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sales:", error)
      }
    }
    fetchTopSellingProducts()
  }, [])
  return (
    <View className="bg-white rounded-xl p-6 shadow-md mb-6">
      <Text className="text-xl font-bold text-gray-900 mb-4">
        Top Selling Products
      </Text>
      {topSellingProducts.map((product, index) => (
        <View key={index} className="flex-row justify-between items-center py-2 border-b border-gray-200">
          <Text className="text-gray-700 font-medium">{product.name}</Text>
          <Text className="text-gray-500">{product.total_sold} sold</Text>
        </View>
      ))}
    </View>
  );
};
