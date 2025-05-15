import HeaderBar from 'components/HeaderBar';
import { AIAssistant } from 'components/inventory/AIAssistant';
import BottomNavigation from 'components/BottomNavigation';
import { DashboardHeader } from 'components/inventory/DashboardHeader';
import { LowStockAlerts } from 'components/inventory/LowStockAlerts';
import { MetricCard } from 'components/inventory/MetricCard';
import { BagIcon, UpTrendIcon } from 'components/inventory/SVGIcons';
import { TopSellingProducts } from 'components/inventory/TopSellingProducts';
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from 'react-native';
import { getTodayOrderCount, getTodayRevenue } from 'services/sale';
import { formatMoney } from 'utils/formatter';
import { useRouter } from 'expo-router';
import { navItems } from 'constants/navItems';

export const InventoryDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'home' | 'analytics' | 'inventory' | 'settings'>('analytics');
    const [todayRevenue, setTodayRevenue] = useState(0);
    const [todayOrders, setTodayOrders] = useState(0);
    const router = useRouter();
    useEffect(() => {
        const fetchTodayData = async () => {
            try {
                const revenueResponse = await getTodayRevenue();
                setTodayRevenue(revenueResponse.revenue)

                const orderResponse = await getTodayOrderCount();
                setTodayOrders(orderResponse.total_orders)
            } catch (error) {
                console.error("Lỗi khi lấy danh sách sales:", error)
            }
        }
        fetchTodayData()
    }, [])

    const handleRestockPress = () => {
        console.log('Restock pressed');
        // navigate to messages screen with the message "What should I restock?"
        router.push({
            pathname: '/messages',
            params: { initialMessage: 'What should I restock?' }
        });
    };

    const handlePriceSuggestionsPress = () => {
        console.log('Price suggestions pressed');
        // navigate to messages screen with the message "Price suggestions"
        router.push({
            pathname: '/messages',
            params: { initialMessage: 'Price suggestions' }
        });
    };

    const handleOrderPress = (productId: string) => {
        console.log(`Order pressed for ${productId}`);
        // Implement order functionality
    };

    const handleNavPress = useCallback((itemId: string) => {
        try {
            router.push(`/${itemId}`);
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }, [router]);

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <View className="flex-1">
                <HeaderBar
                    title="Inventory Dashboard"
                    onBackPress={() => router.back()}
                    onSearchPress={() => console.log('Search pressed')}
                    onNotificationPress={() => console.log('Notification pressed')}
                />

                <ScrollView className="flex-1 px-4">
                    <View className="flex-row mb-4">
                        <MetricCard
                            title="Revenue"
                            value={formatMoney(todayRevenue.toString())}
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

export default InventoryDashboard;
