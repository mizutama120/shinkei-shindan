import { useState, useCallback } from 'react';
import { questions } from '../data/questions';

export type Screen = 'start' | 'quiz' | 'result';

export function useQuiz() {
  const [screen, setScreen] = useState<Screen>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [resultTypeKey, setResultTypeKey] = useState<string>('a');

  const startQuiz = useCallback(() => {
    setAnswers([]);
    setCurrentIndex(0);
    setScreen('quiz');
  }, []);

  const selectOption = useCallback(
    (optionIndex: number) => {
      const newAnswers = [...answers, optionIndex];
      setAnswers(newAnswers);

      if (currentIndex < questions.length - 1) {
        setTimeout(() => {
          setCurrentIndex((i) => i + 1);
        }, 350);
      } else {
        // 全問終了 → スコア計算
        const totalScores = questions.reduce<number[]>((acc, q, i) => {
          const selected = newAnswers[i];
          const s = q.options[selected].scores;
          return acc.map((v, j) => v + s[j]);
        }, [0, 0, 0, 0]);

        const maxScore = Math.max(...totalScores);
        const typeIndex = totalScores.indexOf(maxScore);
        const typeKey = ['a', 'b', 'c', 'd'][typeIndex];
        setResultTypeKey(typeKey);

        setTimeout(() => {
          setScreen('result');
        }, 350);
      }
    },
    [answers, currentIndex]
  );

  const restart = useCallback(() => {
    setScreen('start');
    setCurrentIndex(0);
    setAnswers([]);
  }, []);

  return {
    screen,
    currentIndex,
    totalQuestions: questions.length,
    currentQuestion: questions[currentIndex],
    resultTypeKey,
    startQuiz,
    selectOption,
    restart,
  };
}
