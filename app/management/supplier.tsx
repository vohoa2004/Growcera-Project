import { Stack } from 'expo-router';
import AISupplierScreen from '../../screens/AISupplierScreen';

export default function SupplierManagementScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <AISupplierScreen />
    </>
  );
} 