import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const SearchInput = styled.input`
  animation: ${fadeIn} 2s;
  width: 80%;
  max-width: 400px;
  height: 80%;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.color.whiteInactive};
  color: ${(props) => props.theme.color.secondaryDark};
  font-weight:bold;
  font-size: ${(props) => props.theme.fontSize.small};

  &:focus {
    background: ${(props) => props.theme.color.white};
  }
`;

const SearchBar = props => <SearchInput {...props}/>;

export default SearchBar