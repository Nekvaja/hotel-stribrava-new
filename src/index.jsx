import { createRoot } from 'react-dom/client';
import { Homepage } from './pages/HomePage';
import './global.css';


createRoot(
  document.querySelector('#app'),
).render(<Homepage />);
