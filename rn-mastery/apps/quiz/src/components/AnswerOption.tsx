import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { useQuizContext } from '@/providers/QuizProvider';

interface AnswerOptionProps {
  option: string;
}

export function AnswerOption({ option }: AnswerOptionProps) {
  const { selectedOption, setSelectedOption } = useQuizContext();
  const isSelected = selectedOption === option;

  const handlePress = useCallback(() => {
    setSelectedOption(option);
  }, [option, setSelectedOption]);

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="button"
      className={twMerge(
        'border p-5 rounded-full',
        isSelected
          ? 'bg-[#E1F396] border-[#E1F396]'
          : 'bg-white border-gray-300'
      )}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}
