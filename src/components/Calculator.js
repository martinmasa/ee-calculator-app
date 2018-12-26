import React, { Component } from 'react';
import styled from 'styled-components';

import CalculatorButton from './CalculatorButton';

const Container = styled.section`
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    'display display display display display'
    'seven eight nine clear clear'
    'four five six multiply divide'
    'one two three add subtract'
    'zero zero period evaluate evaluate';
  width: 320px;
  padding: 5px;
`;

const Display = styled.span`
  grid-area: display;
  border: 1px solid ${({ theme }) => theme.darkerblue};
  padding: 8px;
  display: block;
  text-align: right;
  color: ${({ theme }) => theme.darkgrey};
`;

export const calculatorButtons = {
  numeric: [
    { name: 'period', value: '.' },
    { name: 'zero', value: 0 },
    { name: 'one', value: 1 },
    { name: 'two', value: 2 },
    { name: 'three', value: 3 },
    { name: 'four', value: 4 },
    { name: 'five', value: 5 },
    { name: 'six', value: 6 },
    { name: 'seven', value: 7 },
    { name: 'eight', value: 8 },
    { name: 'nine', value: 9 }
  ],
  operator: [
    { name: 'add', value: '+', label: '[+]', operator: true },
    { name: 'subtract', value: '+', label: '[−]', operator: true },
    { name: 'multiply', value: '+', label: '[×]', operator: true },
    { name: 'divide', value: '+', label: '[÷]', operator: true }
  ]
};

export class Calculator extends Component {
  state = {
    result: ''
  };

  render() {
    const { result } = this.state;
    const buttons = [...calculatorButtons.numeric, ...calculatorButtons.operator];

    return (
      <Container>
        <Display data-testid="calculator-display">{result || 0}</Display>

        {buttons.map(({ name, value, label, operator }) => (
          <CalculatorButton
            key={`btn-${name}`}
            name={name}
            value={value}
            label={label}
            operator={operator}
          />
        ))}

        <CalculatorButton operator name="clear" label="C" />
        <CalculatorButton operator name="evaluate" label="[=]" />
      </Container>
    );
  }
}

export default Calculator;
