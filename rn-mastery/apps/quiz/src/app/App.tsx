import '../../global.css';
import React from 'react';
import { StatusBar } from 'react-native';
import { QuizProvider } from '@/providers/QuizProvider';
import { QuizScreen } from '@components/QuizScreen';

export const App = () => {
  return (
    <>
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>
      {/*@ts-expect-error*/}
      <StatusBar style="auto" />
    </>
  );
};

export default App;
