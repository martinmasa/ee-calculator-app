import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'typeface-lato';

import eeLogo from './assets/ee-logo-white.svg';

const eeTheme = {
  blue: '#1795D4',
  darkblue: '#196B98',
  pink: '#E7087C',
  darkgrey: '#373D45',
  dark: '#333333'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: lato, sans-serif;
    text-align: center;
    color: ${({ theme }) => theme.dark};
  }
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.blue};
  height: 8rem;
  padding: 2rem;

  img {
    height: 100%;
  }
`;

const Main = styled.main`
  display: grid;
  justify-items: center;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={eeTheme}>
        <>
          <GlobalStyle />
          <Header data-testid="app-header">
            <a href="https://www.equalexperts.com/">
              <img src={eeLogo} alt="Equal Experts logo" />
            </a>
          </Header>

          <Main>
            <h1 data-testid="app-heading">Calculator</h1>
          </Main>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
