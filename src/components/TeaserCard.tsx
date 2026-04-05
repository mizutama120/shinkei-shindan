type Props = {
  color: string;
  colorBg: string;
  blurredText: string;
  lineUrl: string;
};

export default function TeaserCard({ color, colorBg, blurredText, lineUrl }: Props) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden mb-4"
      style={{
        background: colorBg,
        border: '1px solid rgba(196,169,107,0.2)',
      }}
    >
      {/* ぼかしコンテンツ */}
      <div className="p-6" style={{ filter: 'blur(5px)', userSelect: 'none' }}>
        <p className="text-[10px] font-gothic tracking-[0.2em] text-ink-soft mb-3 uppercase">
          LINE特典でわかること
        </p>
        <p className="text-sm font-gothic text-ink leading-relaxed">
          {blurredText}
        </p>
        <ul className="mt-3 space-y-1.5">
          {['詳細な解説レポート', '神経系ケア実践ガイド', 'タイプ別ワーク'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-gothic text-ink">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* オーバーレイ */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6"
        style={{ background: 'rgba(253,246,240,0.85)', backdropFilter: 'blur(2px)' }}
      >
        <span className="text-2xl">🔒</span>
        <p className="text-center font-mincho font-bold text-ink text-sm leading-relaxed">
          この先は<br />
          LINE友だち限定コンテンツ
        </p>
        <p className="text-center font-gothic text-xs text-ink-soft leading-relaxed">
          あなたのタイプの詳細解説・ケアガイド・<br />
          神経系ワークが受け取れます
        </p>
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-gothic font-medium transition-transform hover:-translate-y-0.5 active:scale-95"
          style={{
            background: '#06C755',
            boxShadow: '0 4px 16px rgba(6,199,85,0.3)',
          }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 2C6.48 2 2 6.02 2 11c0 3.11 1.61 5.86 4.1 7.61-.1.36-.65 2.29-.67 2.45 0 0-.01.07.04.1.05.03.09.01.09.01.24-.03 2.77-1.82 3.14-2.07.73.14 1.49.21 2.3.21 5.52 0 10-4.02 10-9S17.52 2 12 2z"/>
          </svg>
          LINEで受け取る（無料）
        </a>
      </div>
    </div>
  );
}
