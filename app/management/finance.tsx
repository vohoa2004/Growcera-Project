import { Stack } from 'expo-router';
import FinanceManagement from '../../screens/FinancialManagement';

export default function FinanceManagementScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <FinanceManagement />
    </>
  );
} 