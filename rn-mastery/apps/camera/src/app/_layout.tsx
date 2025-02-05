/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import '../../global.css';

export const _layout = () => {
  return (
    <SafeAreaView className="flex-1 bg-red-400">
      <View className="flex-1 items-center justify-center">
        <Text>Home page</Text>
      </View>
    </SafeAreaView>
  );
};

export default _layout;
