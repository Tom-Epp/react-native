import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function ProfileLayout() {
  return (
    <View className="bg-red-200 flex-1">
      <Slot />
    </View>
  );
}
