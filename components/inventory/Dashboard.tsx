import React, { useCallback, useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";
import { TopSellingProducts } from "./TopSellingProducts";
import { AIAssistant } from "./AIAssistant";
import { LowStockAlerts } from "./LowStockAlerts";
import { UpTrendIcon, BagIcon } from "./SVGIcons";
import { getTodayOrderCount, getTodayRevenue } from "services/sale";
import BottomNavigation from "components/BottomNavigation";
import { navItems } from "constants/navItems";
import { useRouter } from "expo-router";

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "home" | "analytics" | "inventory" | "settings"
  >("analytics");

  const [todayRevenue, setTodayRevenue] = useState(0);
  const [todayOrders, setTodayOrders] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const fetchTodayData = async () => {
      try {
        const revenueResponse = await getTodayRevenue();
        setTodayRevenue(revenueResponse.revenue)
        console.log(revenueResponse)

        const orderResponse = await getTodayOrderCount();
        setTodayOrders(orderResponse.today_orders)
        console.log(orderResponse)
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sales:", error)
      }
    }
    fetchTodayData()
  }, [])

  const handleNavPress = useCallback((itemId: string) => {
    try {
      router.push(`/${itemId}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }, [router]);

  const handleRestockPress = () => {
    console.log("Restock pressed");
    // Implement restock functionality
  };

  const handlePriceSuggestionsPress = () => {
    console.log("Price suggestions pressed");
    // Implement price suggestions functionality
  };

  const handleOrderPress = (productId: string) => {
    console.log(`Order pressed for ${productId}`);
    // Implement order functionality
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1">
        <DashboardHeader
          userName="Growcer"
          profileImage=""
        />

        <ScrollView className="flex-1 px-4">
          <View className="flex-row mb-4">
            <MetricCard
              title="Revenue"
              value={todayRevenue.toString()}
              icon={<UpTrendIcon />}
            />
            <MetricCard
              title="Orders"
              value={todayOrders.toString()}
              icon={<BagIcon />}
            />
          </View>

          <TopSellingProducts />

          <AIAssistant
            onPressRestock={handleRestockPress}
            onPressPriceSuggestions={handlePriceSuggestionsPress}
          />

          <LowStockAlerts onPressOrder={handleOrderPress} />
        </ScrollView>
        <BottomNavigation
          items={navItems}
          onItemPress={handleNavPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
