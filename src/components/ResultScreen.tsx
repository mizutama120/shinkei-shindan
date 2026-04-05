import { NervousSystemType } from '../data/types';
import GaugeBar from './GaugeBar';
import ResultCard from './ResultCard';

type Props = {
  typeData: NervousSystemType;
  onRestart: () => void;
};

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <span
      className="absolute pointer-events-none select-none opacity-50"
      style={{ ...style, color: 'inherit' }}
    >
      ✦
    </span>
  );
}

export default function ResultScreen({ typeData, onRestart }: Props) {
  const { color, colorBg, badge, name, sub, gauges, overviewTitle, overview, traits, careTitle, care } = typeData;

  return (
    <div
      className="min-h-screen animate-fade-up"
      style={{ background: 'linear-gradient(160deg, #FDF0E8 0%, #F5EAF0 50%, #EEE8F5 100%)' }}
    >
      {/* ヒーローセクション */}
      <div
        className="relative px-5 pt-12 pb-8 overflow-hidden"
        style={{ background: colorBg }}
      >
        <Particle style={{ top: '10%', left: '8%', fontSize: '9px', color, animation: 'float 9s ease-in-out infinite' }} />
        <Particle style={{ top: '20%', right: '12%', fontSize: '7px', color, animation: 'float 7s ease-in-out infinite 1.5s' }} />
        <Particle style={{ bottom: '15%', left: '20%', fontSize: '11px', color, animation: 'float 11s ease-in-out infinite 0.5s' }} />

        {/* バッジ */}
        <div className="flex justify-center mb-4">
          <span
            className="inline-block px-5 py-1.5 rounded-full text-xs font-gothic font-medium tracking-[0.2em]"
            style={{
              background: `${color}18`,
              border: `1px solid ${color}55`,
              color,
            }}
          >
            {badge}
          </span>
        </div>

        {/* タイプ名 */}
        <h1
          className="text-center font-mincho font-bold text-3xl leading-tight mb-2"
          style={{ color: '#3D2B2B', letterSpacing: '0.03em' }}
        >
          {name}
        </h1>
        <p className="text-center font-gothic text-xs text-ink-soft tracking-wide mb-7">
          {sub}
        </p>

        {/* ゲージ */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: 'rgba(255,252,248,0.7)',
            border: '1px solid rgba(196,169,107,0.2)',
          }}
        >
          {gauges.map((g, i) => (
            <GaugeBar key={g.label} label={g.label} value={g.value} color={color} delay={i * 150} />
          ))}
        </div>
      </div>

      {/* カード群 */}
      <div className="px-4 pt-6 pb-4">

        {/* カード1：このタイプについて */}
        <ResultCard label="このタイプについて">
          <h3
            className="font-mincho font-bold text-base text-ink leading-snug mb-3"
            style={{ letterSpacing: '0.02em' }}
          >
            {overviewTitle}
          </h3>
          <p
            className="font-gothic text-sm text-ink leading-[1.9] font-light"
            dangerouslySetInnerHTML={{ __html: overview }}
          />
        </ResultCard>

        {/* カード2：チェックリスト */}
        <ResultCard label="こんな傾向ありませんか？">
          <ul className="space-y-3">
            {traits.map((trait, i) => (
              <li key={i} className="flex items-start gap-3 font-gothic text-sm text-ink leading-relaxed font-light">
                <span
                  className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5"
                  style={{ background: color }}
                />
                {trait}
              </li>
            ))}
          </ul>
        </ResultCard>

        {/* カード3：今すぐできること */}
        <ResultCard label={careTitle}>
          <div className="space-y-5">
            {care.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-gothic font-bold text-white mt-0.5"
                  style={{ background: color }}
                >
                  {i + 1}
                </span>
                <div>
                  <p
                    className="font-gothic text-sm font-medium text-ink mb-1"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    {item.title}
                  </p>
                  <p className="font-gothic text-xs text-ink-soft leading-[1.8] font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ResultCard>

        {/* CTA */}
        <div className="mt-6 flex flex-col items-center gap-4">
          <button
            onClick={onRestart}
            className="font-gothic text-sm text-ink-soft hover:text-ink transition-colors underline underline-offset-4"
            style={{ textDecorationColor: 'rgba(196,169,107,0.5)' }}
          >
            もう一度診断する
          </button>

          <p className="font-gothic text-[10px] text-ink-soft tracking-wider mt-1">
            つむぎ｜神経科学オタク
          </p>
        </div>
      </div>
    </div>
  );
}
