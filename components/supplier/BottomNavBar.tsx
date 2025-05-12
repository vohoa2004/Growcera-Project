import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomeIcon, AnalyticsIcon, InventoryIcon, SettingsIcon } from './SVGIcons';

interface BottomNavBarProps {
    activeTab: string;
    onTabPress: (tabName: string) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({
    activeTab,
    onTabPress
}) => {
    return (
        <View className="bg-white pt-3 pb-6 border-t border-gray-200 flex-row justify-around">
            <TouchableOpacity
                className="items-center"
                onPress={() => onTabPress('home')}
            >
                <View className="mb-1">
                    <HomeIcon />
                </View>
                <Text className={`text-xs ${activeTab === 'home' ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="items-center"
                onPress={() => onTabPress('analytics')}
            >
                <View className="mb-1">
                    <AnalyticsIcon />
                </View>
                <Text className={`text-xs ${activeTab === 'analytics' ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                    Analytics
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="items-center"
                onPress={() => onTabPress('inventory')}
            >
                <View className="mb-1">
                    <InventoryIcon />
                </View>
                <Text className={`text-xs ${activeTab === 'inventory' ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                    Inventory
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="items-center"
                onPress={() => onTabPress('settings')}
            >
                <View className="mb-1">
                    <SettingsIcon />
                </View>
                <Text className={`text-xs ${activeTab === 'settings' ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                    Settings
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomNavBar;
