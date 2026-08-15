type Props = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: Props) {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-5 py-10 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* 上部のアクセントライン */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: 'linear-gradient(90deg, #FF7A8A 0%, #7FDBC0 100%)' }}
      />

      <div className="relative z-10 w-full max-w-sm animate-fade-up">
        {/* ロゴ・ブランド名 */}
        <div className="text-center mb-8">
          <p
            className="font-main font-bold tracking-wider mb-1"
            style={{ fontSize: '13px', color: '#FF7A8A', fontFamily: '"Noto Sans JP", sans-serif' }}
          >
            TSUMUGI NERVOUS SYSTEM LAB.
          </p>
          <h1
            className="font-main font-bold leading-tight mb-1"
            style={{ fontSize: '28px', color: '#333333', fontFamily: '"Noto Sans JP", sans-serif' }}
          >
            つむぎの神経系ラボ
          </h1>
          <p
            className="font-main"
            style={{ fontSize: '14px', color: '#666666', fontFamily: '"Noto Sans JP", sans-serif' }}
          >
            自分の神経を、やさしく整える知恵を。
          </p>
        </div>

        {/* メインカード */}
        <div
          className="rounded-3xl p-6 mb-7"
          style={{
            background: '#FFFFF7',
            border: '2px solid #F2F2F2',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          <p
            className="font-main leading-[1.9] mb-4"
            style={{ fontSize: '16px', color: '#333333', fontFamily: '"Noto Sans JP", sans-serif' }}
          >
            「なんか調子悪い」「疲れがとれない」——
            <br />
            それ、性格の問題じゃなくて
            <br />
            <strong style={{ color: '#FF7A8A' }}>神経系の反応パターン</strong>かもしれない。
          </p>
          <p
            className="font-main leading-[1.9]"
            style={{ fontSize: '16px', color: '#333333', fontFamily: '"Noto Sans JP", sans-serif' }}
          >
            自分の神経系の癖を知ると、
            <br />
            どうケアすればいいかが見えてくる。
          </p>

          {/* メタ情報 */}
          <div
            className="flex items-center justify-center gap-6 mt-5 pt-5"
            style={{ borderTop: '1px solid #F2F2F2' }}
          >
            {[
              { icon: '📋', text: '12問' },
              { icon: '⏱', text: '約3分' },
              { icon: '🔓', text: '無料' },
            ].map(({ icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 font-main"
                style={{ fontSize: '15px', color: '#666666', fontFamily: '"Noto Sans JP", sans-serif' }}
              >
                <span>{icon}</span>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* CTAボタン */}
        <button
          onClick={onStart}
          className="w-full py-5 rounded-2xl font-main font-bold text-white tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          style={{
            fontSize: '18px',
            fontFamily: '"Noto Sans JP", sans-serif',
            background: 'linear-gradient(135deg, #FF7A8A 0%, #7FDBC0 100%)',
            boxShadow: '0 6px 20px rgba(255,122,138,0.35)',
          }}
        >
          診断をはじめる →
        </button>

        <p
          className="text-center font-main mt-5"
          style={{ fontSize: '13px', color: '#999999', fontFamily: '"Noto Sans JP", sans-serif' }}
        >
          つむぎ｜神経科学オタク
        </p>
      </div>

      {/* 下部の装飾ドット */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: i === 1 ? '#FF7A8A' : '#F2F2F2' }}
          />
        ))}
      </div>
    </div>
  );
}
