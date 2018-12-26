import React from 'react';
import { render, cleanup } from 'react-testing-library';

import App from '../App';

import eeLogo from '../assets/ee-logo-white.svg';

describe('<App />', () => {
  afterEach(cleanup);

  test('should display header with logo as link', () => {
    const { queryByTestId } = render(<App />);
    const header = queryByTestId('app-header');

    const link = header.firstChild;
    expect(link.getAttribute('href')).toBe('https://www.equalexperts.com/');

    const logo = link.firstChild;
    expect(logo.src).toContain(eeLogo);
  });

  test('should display heading', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('app-heading').textContent).toBe('Calculator');
  });
});
