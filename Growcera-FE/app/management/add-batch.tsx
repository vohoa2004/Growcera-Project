import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import AddProductBatch from 'screens/AddProductBatch';

export default function AddBatchScreen() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <AddProductBatch />
        </>
    );
} 