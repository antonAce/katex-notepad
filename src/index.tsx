import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { store } from './store/config'

import reportWebVitals from './reportWebVitals';
import App from './App';

import 'katex/dist/katex.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}><App /></Provider>);

reportWebVitals();
