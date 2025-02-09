import { Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import CustomButton from '@components/CustomButton';

export default function ConfirmForm() {
  const onNext = () => {
    // router.push('/');
    router.dismissAll();
    router.back();
  };

  return (
    <View className="bg-white flex-1 p-2.5">
      <Text>Confirm form submission</Text>
      <CustomButton title="Sumit" className="mt-auto mb-6" onPress={onNext} />
    </View>
  );
}
