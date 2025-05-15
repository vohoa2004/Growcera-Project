import { Stack } from 'expo-router';
import SupplierProfile from 'screens/SupplierProfile';
'screens/ProductDetails';

export default function SupplierById() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <SupplierProfile />
        </>
    );
} 