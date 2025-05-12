import { AIAssistant } from 'components/inventory/AIAssistant';
import { BottomNavigation } from 'components/inventory/BottomNavigation';
import { DashboardHeader } from 'components/inventory/DashboardHeader';
import { LowStockAlerts } from 'components/inventory/LowStockAlerts';
import { MetricCard } from 'components/inventory/MetricCard';
import { BagIcon, UpTrendIcon } from 'components/inventory/SVGIcons';
import { TopSellingProducts } from 'components/inventory/TopSellingProducts';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';


export const InventoryDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'home' | 'analytics' | 'inventory' | 'settings'>('analytics');

    const handleTabPress = (tab: 'home' | 'analytics' | 'inventory' | 'settings') => {
        setActiveTab(tab);
    };

    const handleRestockPress = () => {
        console.log('Restock pressed');
        // Implement restock functionality
    };

    const handlePriceSuggestionsPress = () => {
        console.log('Price suggestions pressed');
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
                            value="$12,849"
                            changeText="+12.5% vs last week"
                            icon={<UpTrendIcon />}
                        />
                        <MetricCard
                            title="Orders"
                            value="284"
                            changeText="+8.2% vs last week"
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
                    activeTab={activeTab}
                    onTabPress={handleTabPress}
                />
            </View>
        </SafeAreaView>
    );
};

export default InventoryDashboard;
