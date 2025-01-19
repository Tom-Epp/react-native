import { View, Text } from 'react-native';
import { AnswerOption } from '@components/AnswerOption';
import { Question } from '@/types';
import { useState } from 'react';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({
  question: { options, title, correctAnswer },
}: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  console.log(selectedOption);
  return (
    <View className="bg-white p-5 rounded-xl py-10 gap-5 shadow-md w-5/6">
      <Text className="text-2xl font-medium">{title}</Text>
      <View className="gap-5">
        {options.map((option, index) => (
          <AnswerOption
            onPress={setSelectedOption}
            option={option}
            key={`option-${index + 1}`}
            isSelected={option === selectedOption}
          />
        ))}
      </View>
    </View>
  );
}
