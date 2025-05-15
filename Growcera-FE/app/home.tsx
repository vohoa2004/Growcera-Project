import { Stack } from 'expo-router';
import Homepage from '../screens/Homepage';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Homepage />
    </>
  );
} 