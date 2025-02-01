import { PropsWithChildren, useContext, useState } from 'react';
import { createContext } from 'react';
import Questions from '@/questions';
import { Question } from '@/types';
import { noop } from 'lodash';

type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNext?: () => void;
  selectedOption?: string;
  setSelectedOption: (newOption: string) => void;
  score: number;
  totalQuestions: number;
};

const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  score: 0,
  selectedOption: undefined,
  onNext: () => noop,
  setSelectedOption: () => noop,
  totalQuestions: 0,
});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const question = Questions[questionIndex];

  const isFinished = questionIndex >= Questions.length;
  const restartQuiz = () => {
    setQuestionIndex(0);
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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
