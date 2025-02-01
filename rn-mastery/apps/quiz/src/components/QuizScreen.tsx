import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { QuestionCard } from '@components/QuestionCard';
import { FontAwesome6 as FAIcon } from '@expo/vector-icons';
import Card from '@components/Card';
import CustomButton from '@components/CustomButton';
import { useQuizContext } from '@/providers/QuizProvider';
import { useTimer } from '@/hooks/useTimer';
import LottieView from 'lottie-react-native';

export function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();

  const { time, startTimer, clearTimer } = useTimer(25);

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [question]);

  const handleNextPress = useCallback(() => {
    onNext();
  }, [onNext]);

  const handleLongPress = useCallback(() => {
    console.log('onNext');
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-between p-4">
        <Text className="text-lg font-bold">
          {`Question ${questionIndex + 1}/${totalQuestions}`}
        </Text>
        {question ? (
          <View className="w-full items-center gap-2">
            <QuestionCard question={question} />
            {/* TODO: Replace static text with a dynamic countdown timer if needed */}
            <Text className="text-sm">{`${time} sec`}</Text>
          </View>
        ) : (
          <>
            <LottieView
              style={StyleSheet.absoluteFill}
              source={require('@assets/party.json')}
              // loop={false}
              autoPlay
            />
            <Card title="Well done!">
              <Text className="text-lg">{`Score ${score}/${totalQuestions}`}</Text>
              <Text className="text-md">{`Best score: ${bestScore}`}</Text>
            </Card>
          </>
        )}
        <CustomButton
          title="Next"
          rightIcon={<FAIcon name="arrow-right-long" size={16} color="white" />}
          onPress={handleNextPress}
          onLongPress={handleLongPress}
        />
      </View>
    </SafeAreaView>
  );
}
