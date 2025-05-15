import { Stack } from 'expo-router';
import ProductDetailsScreen from 'screens/ProductDetails';

export default function ProductDetailsById() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ProductDetailsScreen />
        </>
    );
} 