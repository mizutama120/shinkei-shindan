import { useEffect, useRef, useState } from 'react';

type Props = {
  label: string;
  value: number;
  color: string;
  delay?: number;
};

export default function GaugeBar({ label, value, color, delay = 0 }: Props) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(value);
    }, 500 + delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-gothic text-ink-soft">{label}</span>
        <span className="text-xs font-gothic font-medium" style={{ color }}>
          {value}%
        </span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(196,169,107,0.12)' }}
      >
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}99 0%, ${color} 100%)`,
            transitionDuration: '1s',
          }}
        />
      </div>
    </div>
  );
}
