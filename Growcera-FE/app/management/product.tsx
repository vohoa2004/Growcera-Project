import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import ProductList from 'screens/ProductList';

export default function ProductScreen() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ProductList />
        </>
    );
} 