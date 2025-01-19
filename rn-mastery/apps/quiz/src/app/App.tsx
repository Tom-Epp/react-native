import '../../global.css';
import React from 'react';
import { StatusBar } from 'react-native';

import { QuizScreen } from '@components/QuizScreen';

export const App = () => {
  return (
    <>
      <QuizScreen />
      {/*@ts-expect-error*/}
      <StatusBar style="auto" />
    </>
  );
};

export default App;
