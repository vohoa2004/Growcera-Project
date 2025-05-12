import { Stack } from 'expo-router';
import { InventoryDashboard } from '../screens/InventoryDashboard';

export default function AnalyticsScreen() {
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