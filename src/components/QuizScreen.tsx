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

  // 問いが変わるたびに選択状態とアニメーションをリセット
  useEffect(() => {
    setSelected(null);
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [questionIndex]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    // 選択色を少し見せてから次の問いへ
    setTimeout(() => onSelect(idx), 350);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#FFFFFF', paddingTop: '80px' }}>
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
          className="font-main font-bold tracking-[0.15em] mb-3"
          style={{ color: '#FF7A8A', fontSize: '16px' }}
        >
          Q{questionIndex + 1}<span style={{ fontSize: '13px', color: '#BBBBBB', marginLeft: '6px' }}>/ {totalQuestions}</span>
        </p>

        {/* 質問文 */}
        <h2
          className="font-main font-bold text-charcoal leading-[1.8] mb-7"
          style={{ fontSize: '18px', letterSpacing: '0.02em' }}
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
