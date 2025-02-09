import { Text, View } from 'react-native';
import React from 'react';
import CustomButton from '@components/CustomButton';
import { router } from 'expo-router';

export default function PersonalDetailsForm() {
  const onNext = () => {
    router.push('/checkout/payment');
  };

  return (
    <View className="bg-white flex-1 p-2.5">
      <Text>Personal Details</Text>
      <CustomButton title="Next" className="mt-auto mb-6" onPress={onNext} />
    </View>
  );
}
