import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";
import { TopSellingProducts } from "./TopSellingProducts";
import { AIAssistant } from "./AIAssistant";
import { LowStockAlerts } from "./LowStockAlerts";
import { BottomNavigation } from "./BottomNavigation";
import { UpTrendIcon, BagIcon } from "./SVGIcons";
import { getTodayOrderCount, getTodayRevenue } from "services/sale";

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "home" | "analytics" | "inventory" | "settings"
  >("analytics");

  const [todayRevenue, setTodayRevenue] = useState(0);
  const [todayOrders, setTodayOrders] = useState(0);

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

  const handleTabPress = (
    tab: "home" | "analytics" | "inventory" | "settings",
  ) => {
    setActiveTab(tab);
  };

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
          userName="Alex"
          profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/310564a40e3456c682e5063e752baf388c58dfda"
        />

        <ScrollView className="flex-1 px-4">
          <View className="flex-row mb-4">
            <MetricCard
              title="Revenue"
              value={todayRevenue.toString()}
              // changeText="+12.5% vs last week"
              icon={<UpTrendIcon />}
            />
            <MetricCard
              title="Orders"
              value={todayOrders.toString()}
              // changeText="+8.2% vs last week"
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

        <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
