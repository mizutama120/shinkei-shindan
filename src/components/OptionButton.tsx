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
      className="relative w-full text-left px-5 py-4 rounded-2xl transition-all duration-200"
      style={{
        fontSize: '16px',
        lineHeight: '1.7',
        fontFamily: '"Noto Sans JP", sans-serif',
        fontWeight: selected ? '700' : '400',
        color: selected ? '#FFFFFF' : '#333333',
        background: selected ? '#FF7A8A' : '#F2F2F2',
        border: selected ? '2px solid #FF7A8A' : '2px solid #F2F2F2',
        boxShadow: selected ? '0 4px 16px rgba(255,122,138,0.3)' : 'none',
        transform: selected ? 'scale(1.01)' : 'scale(1)',
      }}
    >
      <span className="block pr-8">{text}</span>

      {/* チェックマーク */}
      {selected && (
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
          style={{ background: 'rgba(255,255,255,0.3)', color: '#fff' }}
        >
          ✓
        </span>
      )}
    </button>
  );
}
