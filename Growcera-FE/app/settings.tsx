import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    </>
  );
} 