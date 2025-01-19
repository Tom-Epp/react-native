import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export function Loader() {
  return (
    <View className="flex-1 justify-center items-center gap-2.5">
      <ActivityIndicator size="small" />
      <Text>Fetching data..</Text>
    </View>
  );
}
