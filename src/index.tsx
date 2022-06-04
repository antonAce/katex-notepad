import { Provider } from 'react-redux';
import { store } from './store/config'

import ReactDOM from 'react-dom/client';
import App from './App';

import 'katex/dist/katex.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}><App /></Provider>);
