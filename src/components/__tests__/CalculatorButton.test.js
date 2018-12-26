import React from 'react';
import { render, cleanup } from 'react-testing-library';

import CalculatorButton from '../CalculatorButton';

const defaultProps = {
  name: 'five',
  value: '5'
};

describe('<CalculatorButton />', () => {
  afterEach(cleanup);

  test('should display label', () => {
    const props = { ...defaultProps, label: 'somelabel' };
    const { queryByTestId } = render(<CalculatorButton {...props} />);
    expect(queryByTestId(`btn-${props.name}`).textContent).toBe(`${props.label}`);
  });

  test('should display value when label not provided', () => {
    const props = { ...defaultProps };
    const { queryByTestId } = render(<CalculatorButton {...props} />);
    expect(queryByTestId(`btn-${props.name}`).textContent).toBe(`${props.value}`);
  });
});
