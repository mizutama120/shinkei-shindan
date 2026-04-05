type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full px-5 pt-5 pb-2">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-gothic text-ink-soft tracking-widest">
          QUESTION
        </span>
        <span className="text-xs font-gothic text-ink-soft">
          <span className="text-pink-main font-medium">{current}</span>
          <span className="mx-1">/</span>
          {total}
        </span>
      </div>
      <div
        className="w-full h-1 rounded-full overflow-hidden"
        style={{ background: 'rgba(196,169,107,0.15)' }}
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #C4A96B 0%, #D4869A 100%)',
          }}
        />
      </div>
    </div>
  );
}
