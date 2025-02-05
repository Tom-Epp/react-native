/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import '../../global.css';
import { Link } from 'expo-router';

export default function () {
  return (
    <SafeAreaView className="flex-1 bg-red-400">
      <View className="flex-1 items-center justify-center">
        <Text>Welcome to the home page!</Text>
        <Link href="/about">PRESS HERE TO GO TO THE ABOUT PAGE</Link>
      </View>
    </SafeAreaView>
  );
}
