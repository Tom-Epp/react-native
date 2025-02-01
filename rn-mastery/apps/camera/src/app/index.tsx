import { View, Text, SafeAreaView } from 'react-native';
import '../../global.css';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-red-400">
      <View className="flex-1 items-center justify-center">
        <Text>Home page</Text>
      </View>
    </SafeAreaView>
  );
}
