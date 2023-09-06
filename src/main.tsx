import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/resetStyles.scss';
import { ThemeProvider } from 'styled-components';
import ThemeColors from './styles/ThemeColors.ts';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.ts';
import { StyledEngineProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={ThemeColors}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
