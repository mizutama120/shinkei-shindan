import { ReactNode } from 'react';

type Props = {
  label?: string;
  children: ReactNode;
  className?: string;
};

export default function ResultCard({ label, children, className = '' }: Props) {
  return (
    <div
      className={`relative rounded-3xl p-6 mb-4 ${className}`}
      style={{
        background: '#FFFCF8',
        border: '1px solid rgba(196,169,107,0.2)',
        boxShadow: '0 4px 24px rgba(196,137,107,0.08)',
      }}
    >
      {/* 角のゴールド装飾 */}
      <span
        className="absolute top-3 left-3 w-4 h-4 pointer-events-none"
        style={{
          borderTop: '1.5px solid rgba(196,169,107,0.5)',
          borderLeft: '1.5px solid rgba(196,169,107,0.5)',
          borderRadius: '2px 0 0 0',
        }}
      />
      <span
        className="absolute top-3 right-3 w-4 h-4 pointer-events-none"
        style={{
          borderTop: '1.5px solid rgba(196,169,107,0.5)',
          borderRight: '1.5px solid rgba(196,169,107,0.5)',
          borderRadius: '0 2px 0 0',
        }}
      />
      <span
        className="absolute bottom-3 left-3 w-4 h-4 pointer-events-none"
        style={{
          borderBottom: '1.5px solid rgba(196,169,107,0.5)',
          borderLeft: '1.5px solid rgba(196,169,107,0.5)',
          borderRadius: '0 0 0 2px',
        }}
      />
      <span
        className="absolute bottom-3 right-3 w-4 h-4 pointer-events-none"
        style={{
          borderBottom: '1.5px solid rgba(196,169,107,0.5)',
          borderRight: '1.5px solid rgba(196,169,107,0.5)',
          borderRadius: '0 0 2px 0',
        }}
      />

      {label && (
        <p className="text-[10px] font-gothic tracking-[0.2em] text-ink-soft mb-3 uppercase">
          {label}
        </p>
      )}
      {children}
    </div>
  );
}
