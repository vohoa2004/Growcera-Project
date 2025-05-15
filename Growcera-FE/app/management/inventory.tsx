import { Stack } from 'expo-router';
import { InventoryDashboard } from '../../screens/InventoryDashboard';

export default function InventoryManagementScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <InventoryDashboard />
    </>
  );
} 