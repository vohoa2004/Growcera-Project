import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BackIcon, LightbulbIcon, SearchIcon, NotificationIcon } from './supplier/SVGIcons';

interface HeaderBarProps {
    title: string;
    onBackPress: () => void;
    onSearchPress: () => void;
    onNotificationPress: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
    title,
    onBackPress,
    onSearchPress,
    onNotificationPress
}) => {
    return (
        <View className="bg-white pt-12 pb-4 px-4">
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                    <TouchableOpacity
                        onPress={onBackPress}
                        className="p-2"
                    >
                        <BackIcon />
                    </TouchableOpacity>
                    <View className="flex-row items-center ml-2">
                        <Text className="text-gray-800 font-semibold text-lg">{title}</Text>
                        <View className="ml-2">
                            <LightbulbIcon />
                        </View>
                    </View>
                </View>

                <View className="flex-row">
                    <TouchableOpacity
                        onPress={onSearchPress}
                        className="p-2 mr-2"
                    >
                        <SearchIcon />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onNotificationPress}
                        className="p-2"
                    >
                        <NotificationIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default HeaderBar;
