import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Button';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
  const [useDarktheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarktheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>

      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button>
      <div
        style={{
          background: useDarktheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <PrimaryButton>Hello World!</PrimaryButton>
        <SecondaryButton>Hello World!</SecondaryButton>
        <TertiaryButton>Hello World!</TertiaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
