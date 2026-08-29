import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// LINEブラウザ検出：LINEのWKWebViewはナビゲーションバーがWebコンテンツに重なる
// そのため約90pxのコンテンツが上部に隠れる → コンテンツをその分下にずらす
if (/Line\//i.test(navigator.userAgent)) {
  document.documentElement.style.setProperty('--inapp-top', '90px');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
