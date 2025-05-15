import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

interface ContactItemProps {
    icon: ReactNode;
    text: string;
}

const ContactItem = ({ icon, text }: ContactItemProps) => {
    return (
        <View className="flex-row items-center">
            <View className="w-8 h-8 justify-center items-center">
                {icon}
            </View>
            <View className="ml-2">
                <Text className="text-gray-700">{text}</Text>
            </View>
        </View>
    );
};

export default ContactItem;
