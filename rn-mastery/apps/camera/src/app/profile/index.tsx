import React from 'react';
import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen options={{ title: 'Profile' }} />
      <Text className="text-2xl font-medium">Profile Screen</Text>
      <Link href="/">
        <View className="bg-blue-500 border rounded-full p-2">
          <MaterialIcons name="home" size={30} color="white" />
        </View>
      </Link>
    </View>
  );
}
