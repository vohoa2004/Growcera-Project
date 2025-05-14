import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import ProductDetails from 'screens/ProductDetails';
import ProductList from 'screens/ProductList';

export default function ProductDetailsScreen() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ProductDetails />
        </>
    );
} 