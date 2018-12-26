import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import Calculator, { calculatorButtons } from '../Calculator';

const clickHelper = (queryFunction, buttonNames) => {
  buttonNames.forEach((name) => {
    fireEvent.click(queryFunction(`btn-${name}`));
  });
};

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

  test('addition: 4 + 5 + 6 = 15', () => {
    const { queryByTestId } = render(<Calculator />);
    clickHelper(queryByTestId, ['four', 'add', 'five', 'add', 'six', 'evaluate']);

    expect(queryByTestId('calculator-display').textContent).toBe('15');
  });

  test('subtraction: 9 - 2 - 1 = 6', () => {
    const { queryByTestId } = render(<Calculator />);
    clickHelper(queryByTestId, ['nine', 'subtract', 'two', 'subtract', 'one', 'evaluate']);

    expect(queryByTestId('calculator-display').textContent).toBe('6');
  });

  test('multiplication: 7 x 2 x 3 = 42', () => {
    const { queryByTestId } = render(<Calculator />);
    clickHelper(queryByTestId, ['seven', 'multiply', 'two', 'multiply', 'three', 'evaluate']);

    expect(queryByTestId('calculator-display').textContent).toBe('42');
  });

  test('division: 8 / 2 / 2 = 2', () => {
    const { queryByTestId } = render(<Calculator />);
    clickHelper(queryByTestId, ['eight', 'divide', 'two', 'divide', 'two', 'evaluate']);

    expect(queryByTestId('calculator-display').textContent).toBe('2');
  });

  test('multiple operations: 1 + 9 - 2 * 4 / 2 = 6', () => {
    const { queryByTestId } = render(<Calculator />);
    clickHelper(queryByTestId, [
      'one',
      'add',
      'nine',
      'subtract',
      'two',
      'multiply',
      'four',
      'divide',
      'two',
      'evaluate'
    ]);

    expect(queryByTestId('calculator-display').textContent).toBe('6');
  });

  test('clear screen button', () => {
    const { queryByTestId } = render(<Calculator />);

    clickHelper(queryByTestId, ['four', 'add', 'five', 'add', 'six']);
    expect(queryByTestId('calculator-display').textContent).toBe('4+5+6');

    clickHelper(queryByTestId, ['clear']);
    expect(queryByTestId('calculator-display').textContent).toBe('0');
  });
});
