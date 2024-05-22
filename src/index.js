import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './styles/main.css'
import './adaptive/mainAd.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
