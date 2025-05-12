import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

interface QuickActionButtonsProps {
    actions: string[];
    onActionPress: (action: string) => void;
}

const QuickActionButtons: React.FC<QuickActionButtonsProps> = ({
    actions,
    onActionPress
}) => {
    return (
        <View className="px-4 py-3">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 8 }}
            >
                {actions.map((action, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onActionPress(action)}
                        className="bg-blue-500 rounded-2xl px-4 py-2.5"
                        activeOpacity={0.8}
                    >
                        <Text className="text-white font-medium text-center">{action}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default QuickActionButtons;
