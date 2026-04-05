import { useQuiz } from './hooks/useQuiz';
import { types } from './data/types';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

export default function App() {
  const {
    screen,
    currentIndex,
    totalQuestions,
    currentQuestion,
    resultTypeKey,
    startQuiz,
    selectOption,
    restart,
  } = useQuiz();

  return (
    <div className="mx-auto" style={{ maxWidth: 480 }}>
      {screen === 'start' && <StartScreen onStart={startQuiz} />}

      {screen === 'quiz' && (
        <QuizScreen
          question={currentQuestion}
          questionIndex={currentIndex}
          totalQuestions={totalQuestions}
          onSelect={selectOption}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          typeData={types[resultTypeKey]}
          onRestart={restart}
        />
      )}
    </div>
  );
}
