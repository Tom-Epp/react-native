import '../../global.css';
import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import CustomButton from '@components/CustomButton';

export const Index = () => {
  return (
    <>
      <Stack.Screen options={{ title: ' Home' }} />
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 items-center justify-center">
        <Link href="/checkout/personal" asChild>
          <CustomButton title="Checkout" />
        </Link>
      </View>
    </>
  );
};

export default Index;
