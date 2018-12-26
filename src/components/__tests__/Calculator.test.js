import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Calculator, { calculatorButtons } from '../Calculator';

describe('<Calculator />', () => {
  afterEach(cleanup);

  test('should display screen', () => {
    const { queryByTestId } = render(<Calculator />);
    expect(queryByTestId('calculator-display').textContent).toBe('0');
  });

  test('should display numeric buttons', () => {
    const { queryByTestId } = render(<Calculator />);

    calculatorButtons.numeric.forEach(({ name }) => {
      expect(queryByTestId(`btn-${name}`)).toBeTruthy();
    });
  });

  test('should display mathematical operator buttons', () => {
    const { queryByTestId } = render(<Calculator />);

    calculatorButtons.operator.forEach(({ name }) => {
      expect(queryByTestId(`btn-${name}`)).toBeTruthy();
    });
  });

  test('should display clear button', () => {
    const { queryByTestId } = render(<Calculator />);
    expect(queryByTestId('btn-clear')).toBeTruthy();
  });

  test('should display evaluate button', () => {
    const { queryByTestId } = render(<Calculator />);
    expect(queryByTestId('btn-evaluate')).toBeTruthy();
  });
});
