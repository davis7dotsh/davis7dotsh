import { createRoot } from 'react-dom/client';
import * as stylex from '@stylexjs/stylex';
import { App } from './App';
import { documentStyles } from './design-system';
import { lightColors } from './design-tokens.stylex';
import './global.css';

const documentClasses = stylex.props(
  documentStyles.defaults,
  document.documentElement.dataset.theme === 'light' && lightColors,
).className;
if (documentClasses) document.documentElement.classList.add(...documentClasses.split(' '));

createRoot(document.getElementById('root')!).render(<App />);
