import { Pressable, Text, View, PressableProps } from 'react-native';
import React from 'react';

type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
} & PressableProps;

// & ComponentProps<typeof Pressable> For components that don't have a dedicated type

export default function CustomButton({
  title,
  rightIcon,
  ...pressableProps
}: CustomButton) {
  return (
    <Pressable
      {...pressableProps}
      className="bg-[#005055] rounded-full w-11/12 p-5 items-center justify-center"
    >
      <Text className="text-white text-lg leading-normal">{title}</Text>
      <View className="absolute right-0 mr-6">{rightIcon}</View>
    </Pressable>
  );
}
