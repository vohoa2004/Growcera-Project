import React from 'react';
import { View, Text, Image } from 'react-native';

export function StoreIcon() {
    return (
        <View className="items-center">
            <View className="items-center mb-2">
                <Image
                    source={require('../../assets/icon.png')}
                    style={{ width: 500, height: 250 }}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}