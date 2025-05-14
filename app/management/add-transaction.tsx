import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import TransactionLogging from 'screens/TransactionLogging';

export default function AddTransactionScreen() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <TransactionLogging />
        </>
    );
} 