import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import Questions from '@/questions';
import { Question } from '@/types';
import { noop } from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (newOption: string) => void;
  score: number;
  totalQuestions: number;
  bestScore: number;
};

const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  score: 0,
  selectedOption: undefined,
  onNext: () => noop,
  setSelectedOption: () => noop,
  totalQuestions: 0,
  bestScore: 0,
});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const question = Questions[questionIndex];
  const isFinished = questionIndex >= Questions.length;

  useEffect(() => {
    void loadBestScore();
  }, []);

  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score);
      void saveBestScore(score);
    }
  }, [isFinished]);

  const restartQuiz = () => {
    setQuestionIndex(0);
    setSelectedOption(undefined);
    setScore(0);
  };

  const onNext = () => {
    if (isFinished) {
      restartQuiz();
      return;
    }

    setQuestionIndex(questionIndex + 1);
    if (selectedOption === question?.correctAnswer) {
      setScore(currentScore => currentScore + 1);
    }
  };

  const saveBestScore = async (score: number) => {
    try {
      await AsyncStorage.setItem('best-score', score.toString());
    } catch (error) {
      console.log('Error saving score', error);
    }
  };

  const loadBestScore = async () => {
    try {
      const bestScore = await AsyncStorage.getItem('best-score');
      if (bestScore) {
        setBestScore(Number.parseInt(bestScore));
      }
    } catch (error) {
      console.log('Error loading score', error);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        score,
        setSelectedOption,
        totalQuestions: Questions.length,
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
