import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// iOS Safari VHバグ修正: window.innerHeightは実際の表示領域を正確に返す
function applyRealVh() {
  document.documentElement.style.setProperty('--real-vh', `${window.innerHeight}px`);
}
applyRealVh();
window.addEventListener('resize', applyRealVh);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
