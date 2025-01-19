import { View, Text } from 'react-native';
import { AnswerOption } from '@components/AnswerOption';

type Question = {
  title: string;
  options: string[];
  correctAnswer: string;
};

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <View className="bg-white p-5 rounded-lg py-10 gap-5 shadow-md w-5/6">
      <Text className="text-2xl font-medium">{question.title}</Text>
      <View className="gap-5">
        {question.options.map((option, index) => (
          <AnswerOption option={option} key={`option-${index + 1}`} />
        ))}
      </View>
    </View>
  );
}
