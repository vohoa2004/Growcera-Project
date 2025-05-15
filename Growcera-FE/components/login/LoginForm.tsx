import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { LoginModel } from 'models/Auth';
import { login } from 'services/auth';
import { useRouter } from 'expo-router';

export function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Validate email format
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async () => {
        // Reset error message
        setErrorMessage('');

        // Validate inputs
        if (!email.trim()) {
            setErrorMessage('Email is required');
            return;
        }

        if (!isValidEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        if (!password) {
            setErrorMessage('Password is required');
            return;
        }

        // Prepare login data
        const loginData: LoginModel = {
            email,
            password
        };

        try {
            setIsLoading(true);

            // Call login API
            const response = await login(loginData);

            if (response) {
                router.push('/home');
            }
        } catch (error: any) {
            // Handle error
            if (error.response) {
                setErrorMessage('Incorrect email or password. Please try again.');
            } else if (error.request) {
                setErrorMessage('Network error. Please check your connection.');
            } else {
                setErrorMessage('An error occurred. Please try again.');
            }
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View>
            {/* Display error message if any */}
            {errorMessage ? (
                <View className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <Text className="text-red-600">{errorMessage}</Text>
                </View>
            ) : null}

            <View className="mb-4">
                <Text className="text-gray-700 mb-2">Email Address</Text>
                <View className="flex-row items-center border border-gray-200 rounded-lg px-3 py-3 bg-white">
                    <MaterialIcons name="email" size={20} color="#9ca3af" />
                    <TextInput
                        className="flex-1 ml-2 text-gray-700"
                        placeholder="your@email.com"
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            setErrorMessage(''); // Clear error when user types
                        }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
            </View>

            <View className="mb-2">
                <Text className="text-gray-700 mb-2">Password</Text>
                <View className="flex-row items-center border border-gray-200 rounded-lg px-3 py-3 bg-white">
                    <Feather name="lock" size={20} color="#9ca3af" />
                    <TextInput
                        className="flex-1 ml-2 text-gray-700"
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text);
                            setErrorMessage(''); // Clear error when user types
                        }}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Feather name={showPassword ? "eye" : "eye-off"} size={20} color="#9ca3af" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex-row justify-between items-center mb-6">
                <TouchableOpacity
                    className="flex-row items-center"
                    onPress={() => setRememberMe(!rememberMe)}
                >
                    <View className={`w-5 h-5 border border-gray-300 rounded mr-2 ${rememberMe ? 'bg-green-600 border-green-600' : 'bg-white'}`}>
                        {rememberMe && <Feather name="check" size={16} color="white" />}
                    </View>
                    <Text className="text-gray-700">Remember me</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text className="text-green-600 font-medium">Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                className={`bg-green-600 py-4 rounded-lg items-center flex-row justify-center ${isLoading ? 'opacity-70' : ''}`}
                onPress={handleLogin}
                disabled={isLoading}
            >
                {isLoading ? (
                    <ActivityIndicator size="small" color="white" />
                ) : (
                    <>
                        <Text className="text-white font-medium mr-2">Login to Store</Text>
                        <Feather name="arrow-right" size={18} color="white" />
                    </>
                )}
            </TouchableOpacity>

            <View className="flex-row justify-center mt-6">
                <Text className="text-gray-700">Don't have an account? </Text>
                <TouchableOpacity>
                    <Text className="text-green-600 font-medium">Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}