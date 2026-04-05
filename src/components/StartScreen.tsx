type Props = {
  onStart: () => void;
};

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <span
      className="absolute pointer-events-none select-none text-gold opacity-40"
      style={style}
    >
      ✦
    </span>
  );
}

export default function StartScreen({ onStart }: Props) {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-5 py-10 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FDF0E8 0%, #F5EAF0 50%, #EEE8F5 100%)',
      }}
    >
      {/* 浮遊する光の粒子 */}
      <Particle style={{ top: '8%', left: '12%', fontSize: '10px', animation: 'float 8s ease-in-out infinite' }} />
      <Particle style={{ top: '15%', right: '18%', fontSize: '7px', animation: 'float 11s ease-in-out infinite 2s' }} />
      <Particle style={{ top: '55%', left: '6%', fontSize: '8px', animation: 'float 9s ease-in-out infinite 1s' }} />
      <Particle style={{ bottom: '20%', right: '10%', fontSize: '11px', animation: 'float 7s ease-in-out infinite 3s' }} />
      <Particle style={{ bottom: '35%', left: '20%', fontSize: '6px', animation: 'float 12s ease-in-out infinite 0.5s' }} />

      {/* ノイズテクスチャオーバーレイ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 w-full max-w-sm animate-fade-up">
        {/* バッジ */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-gothic tracking-widest"
            style={{
              background: 'rgba(196,169,107,0.12)',
              border: '1px solid rgba(196,169,107,0.35)',
              color: '#8A7070',
            }}
          >
            <span style={{ color: '#C4A96B' }}>✦</span>
            つむぎ × 神経系診断
          </span>
        </div>

        {/* メインタイトル */}
        <h1 className="text-center font-mincho font-bold text-ink leading-tight mb-2">
          <span className="block text-3xl tracking-wide">あなたの神経系は</span>
          <span className="block text-3xl tracking-wide">どのタイプ？</span>
        </h1>

        <p
          className="text-center font-gothic text-xs tracking-[0.18em] mb-8 mt-3"
          style={{ color: '#C4A96B' }}
        >
          神経系反応タイプ診断｜全12問
        </p>

        {/* メインカード */}
        <div
          className="relative rounded-3xl p-6 mb-8"
          style={{
            background: 'rgba(255,252,248,0.85)',
            border: '1px solid rgba(196,169,107,0.25)',
            boxShadow: '0 8px 32px rgba(196,137,107,0.1)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* 角装飾 */}
          {(['tl','tr','bl','br'] as const).map((pos) => (
            <span
              key={pos}
              className="absolute w-5 h-5 pointer-events-none"
              style={{
                top: pos.startsWith('t') ? 10 : undefined,
                bottom: pos.startsWith('b') ? 10 : undefined,
                left: pos.endsWith('l') ? 10 : undefined,
                right: pos.endsWith('r') ? 10 : undefined,
                borderTop: pos.startsWith('t') ? '1.5px solid rgba(196,169,107,0.5)' : undefined,
                borderBottom: pos.startsWith('b') ? '1.5px solid rgba(196,169,107,0.5)' : undefined,
                borderLeft: pos.endsWith('l') ? '1.5px solid rgba(196,169,107,0.5)' : undefined,
                borderRight: pos.endsWith('r') ? '1.5px solid rgba(196,169,107,0.5)' : undefined,
                borderRadius:
                  pos === 'tl' ? '3px 0 0 0' :
                  pos === 'tr' ? '0 3px 0 0' :
                  pos === 'bl' ? '0 0 0 3px' :
                  '0 0 3px 0',
              }}
            />
          ))}

          <p className="font-gothic text-sm text-ink leading-[1.9] font-light">
            「なんか調子悪い」「疲れがとれない」——
            <br />
            それ、性格の問題じゃなくて
            <br />
            <strong className="font-medium">神経系の反応パターン</strong>かもしれない。
          </p>
          <p className="font-gothic text-sm text-ink leading-[1.9] font-light mt-3">
            自分の神経系の癖を知ると、
            <br />
            どうケアすればいいかが見えてくる。
          </p>

          {/* メタ情報 */}
          <div
            className="flex items-center justify-center gap-5 mt-5 pt-5"
            style={{ borderTop: '1px solid rgba(196,169,107,0.2)' }}
          >
            {[
              { icon: '📋', text: '12問' },
              { icon: '⏱', text: '約3分' },
              { icon: '🔓', text: '無料' },
            ].map(({ icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 font-gothic text-xs text-ink-soft">
                <span>{icon}</span>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* CTAボタン */}
        <button
          onClick={onStart}
          className="w-full py-4 rounded-2xl font-gothic font-medium text-base text-white tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #D4869A 0%, #C4A96B 100%)',
            boxShadow: '0 8px 24px rgba(212,134,154,0.35)',
          }}
        >
          診断をはじめる &nbsp;→
        </button>

        <p className="text-center font-gothic text-[10px] text-ink-soft mt-5 tracking-wider">
          つむぎ｜神経科学オタク
        </p>
      </div>
    </div>
  );
}
