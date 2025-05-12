import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RobotIcon } from "./SVGIcons";

interface AIAssistantProps {
  onPressRestock: () => void;
  onPressPriceSuggestions: () => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  onPressRestock,
  onPressPriceSuggestions,
}) => {
  return (
    <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
      <Text className="text-lg font-bold text-gray-800 mb-3">AI Assistant</Text>
      <View className="flex-row items-center bg-green-50 p-3 rounded-lg mb-3">
        <View className="mr-3">
          <RobotIcon />
        </View>
        <Text className="text-gray-700">How can I help you today?</Text>
      </View>
      <View className="flex-row">
        <TouchableOpacity
          onPress={onPressRestock}
          className="bg-gray-100 rounded-lg py-2 px-3 mr-2 flex-1"
        >
          <View>
            <Text className="text-gray-700">What should I</Text>
            <Text className="text-gray-700">restock?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressPriceSuggestions}
          className="bg-gray-100 rounded-lg py-2 px-3 flex-1"
        >
          <Text className="text-gray-700">Price suggestions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
