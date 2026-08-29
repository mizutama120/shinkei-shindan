import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// iOS Safari / LINE in-app browserのビューポート高さバグ修正
// window.innerHeight はiOSでアドレスバーを含む大きい値を返すため、
// 実際に見えている高さ (visualViewport.height) を使う
function applyRealVh() {
  const h = window.visualViewport?.height ?? window.innerHeight;
  document.documentElement.style.setProperty('--real-vh', `${h}px`);
}

// 即時実行（ページ描画前に値を設定）
applyRealVh();

// リサイズ（アドレスバーの出し入れ）でも更新
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', applyRealVh);
} else {
  window.addEventListener('resize', applyRealVh);
}

// ロード後にスクロールリセット（念のため）
window.addEventListener('load', () => window.scrollTo(0, 0));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
