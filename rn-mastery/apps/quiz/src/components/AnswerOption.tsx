import React from 'react';
import { Pressable, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

type AnswerOptionProps = {
  option: string;
  isSelected: boolean;
  onPress: React.Dispatch<React.SetStateAction<string | null>>;
};

export function AnswerOption({
  option,
  isSelected,
  onPress,
}: AnswerOptionProps) {
  console.log('isSelected', isSelected);
  return (
    <Pressable
      onPress={() => onPress(option)}
      className={twMerge(
        'border p-5 rounded-full border-gray-300 bg-green-800',
        isSelected ? 'bg-red' : 'bg-green'
      )}
    >
      <Text className="">{option}</Text>
    </Pressable>
  );
}
