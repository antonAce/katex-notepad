import React from 'react';
import ReactDOM from 'react-dom/client';
import { contextMenuEvent } from './services/config';

import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

contextMenuEvent();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);
reportWebVitals();
