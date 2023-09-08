import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import ThemeColors from './styles/ThemeColors.ts';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.ts';
import { StyledEngineProvider } from '@mui/material';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import PageLayout from './components/PageLayout/PageLayout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={ThemeColors}>
      <Provider store={store}>
        <GlobalStyles />
        <PageLayout>
          <App />
        </PageLayout>
      </Provider>
    </ThemeProvider>
  </StyledEngineProvider>,
);
