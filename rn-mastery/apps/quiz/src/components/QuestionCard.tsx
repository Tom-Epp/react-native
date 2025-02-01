import { View } from 'react-native';
import { AnswerOption } from '@components/AnswerOption';
import { Question } from '@/types';
import Card from '@components/Card';

type QuestionCard = { question: Question };

export function QuestionCard({ question: { options, title } }: QuestionCard) {
  return (
    <Card title={title}>
      <View className="gap-5">
        {options.map((option, index) => (
          <AnswerOption option={option} key={`option-${index + 1}`} />
        ))}
      </View>
    </Card>
  );
}
