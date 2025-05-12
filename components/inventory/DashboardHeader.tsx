import React from "react";
import { View, Text, Image } from "react-native";
import { NotificationIcon } from "./SVGIcons";

interface DashboardHeaderProps {
  userName: string;
  profileImage: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName,
  profileImage,
}) => {
  return (
    <View className="flex-row justify-between items-center px-4 pt-12 pb-4">
      <View>
        <Text className="text-2xl font-bold text-gray-800">Dashboard</Text>
        <Text className="text-gray-500 mt-1">Welcome back, {userName}</Text>
      </View>
      <View className="flex-row items-center">
        <View className="mr-4">
          <NotificationIcon />
        </View>
        <Image
          source={{ uri: profileImage }}
          className="w-10 h-10 rounded-full"
          alt="Profile"
        />
      </View>
    </View>
  );
};
