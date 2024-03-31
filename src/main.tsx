import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme.tsx'; // Импортируйте созданную тему

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </ThemeProvider>,
)
