import { NervousSystemType } from '../data/types';

type Props = {
  typeData: NervousSystemType;
  onRestart: () => void;
};

const TYPE_COLORS: Record<string, { main: string; bg: string; light: string }> = {
  a: { main: '#FF7A8A', bg: '#FFEEF0', light: '#FFF5F6' },
  b: { main: '#7FDBC0', bg: '#E0F5EF', light: '#F0FBF8' },
  c: { main: '#5B8DEF', bg: '#E8F0FE', light: '#F4F8FF' },
  d: { main: '#FFD966', bg: '#FFF8DC', light: '#FFFBEF' },
};

export default function ResultScreen({ typeData, onRestart }: Props) {
  const { id, badge, name, nickname, sub, overviewTitle, overview, notionUrl } = typeData;
  const palette = TYPE_COLORS[id] ?? TYPE_COLORS.a;

  return (
    <div
      className="min-h-screen animate-fade-up"
      style={{ background: '#FFFFFF', fontFamily: '"Noto Sans JP", sans-serif' }}
    >
      {/* ヒーローセクション（アクセントライン含む） */}
      <div
        className="px-5 pb-8"
        style={{ background: palette.light, paddingTop: '130px' }}
      >
        {/* 上部アクセントライン */}
        <div
          className="h-1.5 w-full mb-6 -mx-5"
          style={{ background: `linear-gradient(90deg, ${palette.main} 0%, #FFFFFF 100%)`, width: 'calc(100% + 40px)', marginTop: '-8px' }}
        />
        {/* バッジ */}
        <div className="flex justify-center mb-3">
          <span
            className="inline-block px-5 py-2 rounded-full font-bold tracking-[0.2em]"
            style={{
              fontSize: '13px',
              background: palette.bg,
              border: `2px solid ${palette.main}`,
              color: palette.main,
            }}
          >
            {badge}
          </span>
        </div>

        {/* タイプ名 */}
        <h1
          className="text-center font-bold leading-tight mb-1"
          style={{ fontSize: '24px', color: '#333333', letterSpacing: '0.03em' }}
        >
          {name}
        </h1>

        {/* ニックネーム */}
        <p
          className="text-center font-bold mb-2"
          style={{ fontSize: '18px', color: palette.main }}
        >
          {nickname}
        </p>

        {/* サブキャッチ */}
        <p
          className="text-center mb-0"
          style={{ fontSize: '14px', color: '#666666' }}
        >
          {sub}
        </p>
      </div>

      {/* 説明セクション */}
      <div className="px-5 pt-6 pb-4">
        <div
          className="rounded-3xl p-6 mb-5"
          style={{
            background: '#FFFFF7',
            border: `2px solid ${palette.bg}`,
          }}
        >
          <h2
            className="font-bold mb-4"
            style={{ fontSize: '18px', color: '#333333', letterSpacing: '0.02em' }}
          >
            {overviewTitle}
          </h2>
          <p
            className="leading-[2.0]"
            style={{ fontSize: '16px', color: '#333333' }}
            dangerouslySetInnerHTML={{ __html: overview }}
          />
        </div>

        {/* むぎマスコット */}
        <div className="flex justify-center my-4">
          <img
            src="/mugi-result.png"
            alt="むぎ"
            style={{ width: '90px', height: 'auto', opacity: 0.92 }}
          />
        </div>
        <p className="text-center mb-4" style={{ fontSize: '13px', color: '#888888', lineHeight: 1.9 }}>
          診断おつかれさまでした<br />
          あなたに合う整え方を一緒にみていきましょう
        </p>

        {/* Notionリンクボタン */}
        <a
          href={notionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 mb-5"
          style={{
            fontSize: '17px',
            background: `linear-gradient(135deg, ${palette.main} 0%, ${palette.main}CC 100%)`,
            boxShadow: `0 6px 20px ${palette.main}40`,
            textDecoration: 'none',
          }}
        >
          <span>📖</span>
          <span>あなたに合う整え方を見る</span>
          <span style={{ fontSize: '14px', opacity: 0.8 }}>→</span>
        </a>

        {/* 区切り線 */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px" style={{ background: '#F2F2F2' }} />
          <span style={{ fontSize: '13px', color: '#999999' }}>または</span>
          <div className="flex-1 h-px" style={{ background: '#F2F2F2' }} />
        </div>

        {/* もう一度診断するボタン */}
        <button
          onClick={onRestart}
          className="w-full py-4 rounded-2xl font-bold transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          style={{
            fontSize: '16px',
            color: '#666666',
            background: '#F2F2F2',
            border: 'none',
          }}
        >
          もう一度診断する
        </button>

        <p
          className="text-center mt-5"
          style={{ fontSize: '13px', color: '#999999' }}
        >
          つむぎ｜神経科学オタク
        </p>
      </div>
    </div>
  );
}
