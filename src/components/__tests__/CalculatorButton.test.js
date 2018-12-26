import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import CalculatorButton from '../CalculatorButton';

const defaultProps = {
  name: 'five',
  value: '5',
  onClick: jest.fn()
};

describe('<CalculatorButton />', () => {
  afterEach(cleanup);

  test('should display label', () => {
    const props = { ...defaultProps, label: 'somelabel' };
    const { queryByTestId } = render(<CalculatorButton {...props} />);
    expect(queryByTestId(`btn-${props.name}`).textContent).toBe(`${props.label}`);
  });

  test('should display value when label not provided', () => {
    const { queryByTestId } = render(<CalculatorButton {...defaultProps} />);
    expect(queryByTestId(`btn-${defaultProps.name}`).textContent).toBe(`${defaultProps.value}`);
  });

  test('should handle click event', () => {
    const { queryByTestId } = render(<CalculatorButton {...defaultProps} />);

    fireEvent.click(queryByTestId(`btn-${defaultProps.name}`));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClick).toHaveBeenCalledWith(`${defaultProps.value}`);
  });
});
