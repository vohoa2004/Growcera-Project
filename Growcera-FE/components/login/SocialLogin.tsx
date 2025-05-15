import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function SocialLogin() {
    return (
        <View className="flex-row justify-center space-x-4">
            <TouchableOpacity className="flex-1 flex-row items-center justify-center py-3 px-4 border border-gray-200 rounded-lg bg-white">
                <AntDesign name="google" size={20} color="#4285F4" />
                <Text className="ml-2 text-gray-700">Google</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 flex-row items-center justify-center py-3 px-4 border border-gray-200 rounded-lg bg-white">
                <AntDesign name="apple1" size={20} color="#000" />
                <Text className="ml-2 text-gray-700">Apple</Text>
            </TouchableOpacity>
        </View>
    );
}