import { SafeAreaView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export const About = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-400">
      <View className="flex-1 items-center justify-center">
        <Text>Welcome to the about page!</Text>
        <Link href="/">PRESS HERE TO GO HOME</Link>
      </View>
    </SafeAreaView>
  );
};

export default About;
