import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import './utils/i18n.js';
import './index.css';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
};

app();