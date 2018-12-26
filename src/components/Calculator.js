import React, { Component } from 'react';
import math from 'mathjs';
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
    { name: 'subtract', value: '-', label: '[−]', operator: true },
    { name: 'multiply', value: '*', label: '[×]', operator: true },
    { name: 'divide', value: '/', label: '[÷]', operator: true }
  ]
};

const operators = ['+', '-', '*', '/'];

export class Calculator extends Component {
  state = {
    result: '',
    calculation: [],
    lastValue: ''
  };

  appendValue = (value) => {
    const { calculation, lastValue } = this.state;
    const newCalculation = calculation;

    if (!lastValue && operators.includes(value)) {
      return;
    }

    if (operators.includes(lastValue) && operators.includes(value)) {
      newCalculation.pop();
    }

    newCalculation.push(value);

    this.setState({
      calculation: newCalculation,
      lastValue: value
    });
  };

  reset = () => {
    this.setState({
      result: '',
      calculation: [],
      lastValue: ''
    });
  };

  evaluate = () => {
    const { calculation } = this.state;

    this.setState({
      result: math.eval(calculation.join('')),
      calculation: [],
      lastValue: ''
    });
  };

  render() {
    const { result, calculation } = this.state;
    const buttons = [...calculatorButtons.numeric, ...calculatorButtons.operator];

    return (
      <Container>
        <Display data-testid="calculator-display">{calculation.join('') || result || 0}</Display>

        {buttons.map(({ name, value, label, operator }) => (
          <CalculatorButton
            key={`btn-${name}`}
            name={name}
            label={label}
            value={value}
            operator={operator}
            onClick={this.appendValue}
          />
        ))}

        <CalculatorButton operator name="clear" label="C" onClick={this.reset} />
        <CalculatorButton operator name="evaluate" label="[=]" onClick={this.evaluate} />
      </Container>
    );
  }
}

export default Calculator;
