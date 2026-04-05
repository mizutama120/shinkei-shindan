import { useState, useEffect } from 'react';
import { Question } from '../data/questions';
import ProgressBar from './ProgressBar';
import OptionButton from './OptionButton';

type Props = {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onSelect: (index: number) => void;
};

export default function QuizScreen({
  question,
  questionIndex,
  totalQuestions,
  onSelect,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  // 問題が変わるたびにアニメーションリセット
  useEffect(() => {
    setSelected(null);
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [questionIndex]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    onSelect(idx);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #FDF0E8 0%, #F5EAF0 50%, #EEE8F5 100%)',
      }}
    >
      <ProgressBar current={questionIndex + 1} total={totalQuestions} />

      <div
        className="flex-1 px-5 pb-8 pt-4 transition-all duration-300"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(16px)',
        }}
      >
        {/* Q番号 */}
        <p
          className="font-gothic text-xs font-medium tracking-[0.2em] mb-3"
          style={{ color: '#D4869A' }}
        >
          Q{questionIndex + 1}
        </p>

        {/* 質問文 */}
        <h2
          className="font-mincho font-bold text-ink text-lg leading-[1.7] mb-7"
          style={{ letterSpacing: '0.02em' }}
        >
          {question.text}
        </h2>

        {/* 選択肢 */}
        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => (
            <OptionButton
              key={i}
              text={opt.text}
              selected={selected === i}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
