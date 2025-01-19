import { Text, View } from 'react-native';

export function AnswerOption({ option }: { option: string }) {
  return (
    <View className="border p-5 rounded-full border-gray-300">
      <Text className="">{option}</Text>
    </View>
  );
}
