import { Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import CustomButton from '@components/CustomButton';

export default function PaymentDetailsForm() {
  const onNext = () => {
    router.push('/checkout/confirm');
  };

  return (
    <View className="bg-white flex-1 p-2.5">
      <Text>Payment Details</Text>
      <CustomButton title="Next" className="mt-auto mb-6" onPress={onNext} />
    </View>
  );
}
