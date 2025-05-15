import { Stack } from 'expo-router';
import SupplierScreen from '../../screens/SupplierScreen';

export default function SupplierManagementScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SupplierScreen />
    </>
  );
} 