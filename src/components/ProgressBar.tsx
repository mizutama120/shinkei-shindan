type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full px-5 pt-5 pb-2" style={{ background: '#FFFFFF' }}>
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-sm font-main font-bold"
          style={{ color: '#FF7A8A', fontFamily: '"Noto Sans JP", sans-serif' }}
        >
          つむぎの神経系ラボ
        </span>
        <span className="text-sm font-main" style={{ color: '#666666', fontFamily: '"Noto Sans JP", sans-serif' }}>
          <span className="font-bold" style={{ color: '#FF7A8A' }}>{current}</span>
          <span className="mx-1">/</span>
          {total}問
        </span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: '#F2F2F2' }}
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #FF7A8A 0%, #7FDBC0 100%)',
          }}
        />
      </div>
    </div>
  );
}
