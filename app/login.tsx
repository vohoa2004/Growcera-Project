import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import LoginPage from 'screens/LoginPage';

export default function MessagesScreen() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <LoginPage />
        </>
    );
} 