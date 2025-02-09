import { Stack } from 'expo-router';
import { View } from 'react-native';
import React from 'react';

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="camera" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
