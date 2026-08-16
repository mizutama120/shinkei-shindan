type Props = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: Props) {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-5 py-8 overflow-hidden"
      style={{ background: '#FFF5F6', fontFamily: '"Noto Sans JP", sans-serif' }}
    >
      <div className="relative z-10 w-full max-w-sm animate-fade-up">

        {/* ブランド名 */}
        <p
          className="text-center font-bold tracking-widest mb-1"
          style={{ fontSize: '11px', color: '#FF7A8A', letterSpacing: '0.18em' }}
        >
          TSUMUGI NERVOUS SYSTEM LAB.
        </p>

        {/* デコレーション線 */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-px flex-1" style={{ background: '#FFBFC7' }} />
          <span style={{ fontSize: '12px', color: '#FF7A8A' }}>♥</span>
          <div className="h-px flex-1" style={{ background: '#FFBFC7' }} />
        </div>

        {/* サブタイトル */}
        <p
          className="text-center font-bold mb-1"
          style={{ fontSize: '13px', color: '#FF7A8A' }}
        >
          今のあなたをチェック
        </p>

        {/* メインタイトル */}
        <h1
          className="text-center font-bold mb-2"
          style={{ fontSize: '32px', color: '#333333', letterSpacing: '0.04em', lineHeight: 1.2 }}
        >
          神経モード診断
        </h1>

        {/* 3ドット */}
        <p className="text-center mb-2" style={{ color: '#FFBFC7', fontSize: '14px', letterSpacing: '0.3em' }}>— ... —</p>

        {/* リード文 */}
        <p className="text-center mb-3" style={{ fontSize: '14px', color: '#555555' }}>
          12問で、今のわたしに合う整え方がわかる。
        </p>

        {/* バッジ行 */}
        <div className="flex justify-center gap-3 mb-4">
          {[
            { icon: '📋', text: '12問' },
            { icon: '⏱', text: '約3分' },
            { icon: '¥', text: '無料' },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid #FFBFC7',
                fontSize: '13px',
                color: '#555555',
              }}
            >
              <span style={{ color: '#FF7A8A' }}>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* むぎマスコット */}
        <div className="flex justify-center mb-3">
          <img
            src="/mugi-top.png"
            alt="むぎ"
            style={{ width: '100px', height: 'auto' }}
          />
        </div>

        {/* メインカード */}
        <div
          className="rounded-3xl px-5 py-5 mb-5"
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #FFD6DB',
            boxShadow: '0 4px 20px rgba(255,122,138,0.08)',
          }}
        >
          {/* 吹き出し1 */}
          <div
            className="inline-block px-4 py-2 rounded-2xl rounded-tl-sm mb-2"
            style={{ background: '#FFF0F2', fontSize: '14px', color: '#333333' }}
          >
            『なんか調子悪い』
          </div>

          {/* 吹き出し2 */}
          <div className="flex justify-end mb-3">
            <div
              className="inline-block px-4 py-2 rounded-2xl rounded-tr-sm"
              style={{ background: '#FFF0F2', fontSize: '14px', color: '#333333' }}
            >
              『休んでも疲れが抜けない』
            </div>
          </div>

          {/* 区切り */}
          <p className="text-center mb-2" style={{ color: '#FFBFC7', fontSize: '13px', letterSpacing: '0.3em' }}>...</p>

          <p className="text-center mb-1" style={{ fontSize: '14px', color: '#555555' }}>それは、</p>

          <p
            className="text-center font-bold mb-1"
            style={{ fontSize: '20px', color: '#FF7A8A', lineHeight: 1.3 }}
          >
            今の神経系のモード
          </p>

          <p className="text-center mb-3" style={{ fontSize: '14px', color: '#555555' }}>
            が関係しているかもしれません。
          </p>

          {/* 区切り */}
          <p className="text-center mb-3" style={{ color: '#FFBFC7', fontSize: '13px', letterSpacing: '0.3em' }}>...</p>

          <p className="text-center" style={{ fontSize: '14px', color: '#555555', lineHeight: 1.8 }}>
            12問・約3分で、今のあなたに合う<br />整え方を見つけます。
          </p>
        </div>

        {/* CTAボタン */}
        <button
          onClick={onStart}
          className="w-full py-5 rounded-2xl font-bold text-white tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          style={{
            fontSize: '18px',
            background: '#FF7A8A',
            boxShadow: '0 6px 20px rgba(255,122,138,0.35)',
            border: 'none',
          }}
        >
          ３分でチェックする →
        </button>

        <p
          className="text-center mt-4"
          style={{ fontSize: '12px', color: '#AAAAAA' }}
        >
          つむぎ | 神経科学オタク
        </p>

      </div>
    </div>
  );
}
