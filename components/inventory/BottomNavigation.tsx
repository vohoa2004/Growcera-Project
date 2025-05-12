import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  HomeIcon,
  AnalyticsIcon,
  InventoryIcon,
  SettingsIcon,
} from "./SVGIcons";

interface BottomNavigationProps {
  activeTab: "home" | "analytics" | "inventory" | "settings";
  onTabPress: (tab: "home" | "analytics" | "inventory" | "settings") => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
  return (
    <View className="flex-row justify-around items-center bg-white pt-3 pb-6 border-t border-gray-200">
      <TouchableOpacity
        onPress={() => onTabPress("home")}
        className="items-center"
      >
        <View className="mb-1">
          <HomeIcon />
        </View>
        <Text
          className={`text-xs ${activeTab === "home" ? "text-green-600 font-medium" : "text-gray-500"}`}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onTabPress("analytics")}
        className="items-center"
      >
        <View className="mb-1">
          <AnalyticsIcon />
        </View>
        <Text
          className={`text-xs ${activeTab === "analytics" ? "text-green-600 font-medium" : "text-gray-500"}`}
        >
          Analytics
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onTabPress("inventory")}
        className="items-center"
      >
        <View className="mb-1">
          <InventoryIcon />
        </View>
        <Text
          className={`text-xs ${activeTab === "inventory" ? "text-green-600 font-medium" : "text-gray-500"}`}
        >
          Inventory
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onTabPress("settings")}
        className="items-center"
      >
        <View className="mb-1">
          <SettingsIcon />
        </View>
        <Text
          className={`text-xs ${activeTab === "settings" ? "text-green-600 font-medium" : "text-gray-500"}`}
        >
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};
