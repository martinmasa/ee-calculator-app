import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.blue};
  height: 5rem;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
  grid-area: ${({ className }) => className.replace('btn-', '')}

  &:hover {
    border-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.pink};
  }

  ${({ operator, theme }) =>
    operator &&
    css`
      background: ${theme.blue};
      color: ${theme.lightgrey};

      &:hover {
        border-color: ${theme.blue};
        background: ${theme.darkblue};
      }
    `}
`;

export class CalculatorButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    operator: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    const { name, value, label, operator } = this.props;
    let props = { name, value, label, className: `btn-${name}` };
    props = operator ? { ...props, operator: 'true' } : props;

    return (
      <StyledButton data-testid={`btn-${name}`} {...props}>
        {label || value}
      </StyledButton>
    );
  }
}

export default CalculatorButton;
