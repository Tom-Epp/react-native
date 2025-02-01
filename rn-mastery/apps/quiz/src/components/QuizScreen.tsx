import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { QuestionCard } from '@components/QuestionCard';
import { FontAwesome6 as FAIcon } from '@expo/vector-icons';
import Card from '@components/Card';
import CustomButton from '@components/CustomButton';
import { useQuizContext } from '@/providers/QuizProvider';

export function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions } =
    useQuizContext();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-1 bg-white items-center justify-between">
        <View>
          <Text>{`Question ${questionIndex + 1}/${totalQuestions}`}</Text>
        </View>
        {question ? (
          <View className="w-full items-center gap-2">
            <QuestionCard question={question} />
            <Text className="">20 sec</Text>
          </View>
        ) : (
          <Card title="Game Over">
            <Text>{`Score ${score}/${totalQuestions}`}</Text>
          </Card>
        )}
        <CustomButton
          title="Next"
          rightIcon={<FAIcon name="arrow-right-long" size={16} color="white" />}
          onPress={onNext}
          onLongPress={() => console.log('onNext')}
        />
      </View>
    </SafeAreaView>
  );
}
