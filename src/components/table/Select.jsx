import React from 'react';
import styled from 'styled-components';

const Select = ({ text, options, flex, dispatch, ...props }) => {
  let selected = props[text.toLowerCase()];
  if (text === 'Death' && selected !== '--' && selected !== null) {
    selected = selected ? 'O' : 'X';
  }

  const handleOptionChange = ({ target }) => {
    const key = text.toLowerCase();
    let option = target.value;
    if (key === 'death') {
      option = target.value === 'O';
    }
    if (target.value === '--') {
      option = null;
    }
    dispatch({ payload: { [key]: option, page: 1 } });
  };

  return (
    <Wrapper flex={flex}>
      <div>{text}</div>
      <select id={text} value={selected || '--'} onChange={handleOptionChange}>
        {['--', ...options].map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  flex: ${({ flex }) => flex};
  & > select {
    border: none;
    background: none;
    &:hover {
      cursor: pointer;
    }
    & > option {
      font-size: 18px;
      text-align: center;
    }
  }
`;
