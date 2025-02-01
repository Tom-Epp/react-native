import { Text, View } from 'react-native';
import { PropsWithChildren } from 'react';

type Card = {
  title: string;
};

export default function Card({ title, children }: PropsWithChildren<Card>) {
  return (
    <View className="bg-white p-5 rounded-xl py-10 gap-5 shadow-md w-5/6">
      <Text className="text-2xl font-medium">{title}</Text>
      {children}
    </View>
  );
}
