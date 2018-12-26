import React from 'react';
import { render, cleanup } from 'react-testing-library';

import App from '../App';

describe('<App />', () => {
  afterEach(cleanup);

  test('should display heading', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('app-heading').textContent).toBe('Calculator');
  });
});
