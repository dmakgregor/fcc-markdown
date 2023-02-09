import './index.css';
import App from './App';
import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
