type Props = {
  text: string;
  selected: boolean;
  onClick: () => void;
};

export default function OptionButton({ text, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={`
        group relative w-full text-left px-5 py-4 rounded-2xl
        font-gothic text-sm leading-relaxed text-ink
        transition-all duration-200
        border
        ${
          selected
            ? 'border-pink-main bg-[#F9EDE8] shadow-md'
            : 'border-[rgba(196,169,107,0.3)] bg-off-white hover:bg-[#F9EDE8] hover:border-[rgba(196,169,107,0.6)] hover:-translate-x-1'
        }
      `}
      style={{
        boxShadow: selected
          ? '0 4px 20px rgba(212,134,154,0.15)'
          : '0 2px 12px rgba(196,137,107,0.06)',
      }}
    >
      <span className="block pr-8">{text}</span>

      {/* チェックマーク */}
      <span
        className={`
          absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full
          flex items-center justify-center text-xs
          transition-all duration-200
          ${selected ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
        `}
        style={{ background: '#C4A96B', color: '#fff' }}
      >
        ✓
      </span>

      {/* hover時の左アクセントライン */}
      <span
        className={`
          absolute left-0 top-3 bottom-3 w-0.5 rounded-full
          transition-all duration-200
          ${selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}
        `}
        style={{ background: '#D4869A' }}
      />
    </button>
  );
}
