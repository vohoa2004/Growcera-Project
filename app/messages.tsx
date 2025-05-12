import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import ChatInterface from 'screens/ChatInterface';

export default function MessagesScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ChatInterface />
    </>
  );
} 