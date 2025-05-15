import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StoreIcon } from '../components/login/StoreIcon';
import { LoginForm } from '../components/login/LoginForm';
import { SocialLogin } from '../components/login/SocialLogin';

export default function LoginPage() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="dark" />
            <View className="flex-1 px-6 py-10 bg-white mx-4 my-8 rounded-3xl">
                <View className="items-center mb-8">
                    <StoreIcon />
                </View>

                <LoginForm />

                <View className="mt-6">
                    <Text className="text-gray-500 text-center mb-4">Or continue with</Text>
                    <SocialLogin />
                </View>
            </View>
        </SafeAreaView>
    );
}