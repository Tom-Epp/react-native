import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { QuestionCard } from '@components/QuestionCard';
import { FontAwesome6 as FAIcon } from '@expo/vector-icons';
import Questions from '@/questions';

export function QuizScreen() {
  const [question] = Questions;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-1 bg-white items-center justify-between">
        <View>
          <Text>Question 1/5</Text>
        </View>
        <View className="w-full items-center gap-2">
          <QuestionCard question={question} />
          <Text className="">20 sec</Text>
        </View>
        <Pressable
          className="bg-[#005055] rounded-full w-11/12 p-5 items-center justify-center"
          onPress={() => console.log('Press!')}
        >
          <Text className="text-white text-lg leading-normal">Next</Text>
          <FAIcon
            name="arrow-right-long"
            size={16}
            color="white"
            className="absolute right-0 mr-4"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
