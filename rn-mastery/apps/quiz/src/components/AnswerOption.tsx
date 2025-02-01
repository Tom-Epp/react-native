import React from 'react';
import { Pressable, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { useQuizContext } from '@/providers/QuizProvider';

type AnswerOption = {
  option: string;
};

export function AnswerOption({ option }: AnswerOption) {
  const { selectedOption, setSelectedOption } = useQuizContext();
  const isSelected = selectedOption === option;
  return (
    <Pressable
      onPress={() => setSelectedOption(option)}
      className={twMerge(
        'border p-5 rounded-full',
        isSelected
          ? 'bg-[#E1F396] border-[#E1F396]'
          : 'bg-white border-gray-300'
      )}
    >
      <Text className="">{option}</Text>
    </Pressable>
  );
}
