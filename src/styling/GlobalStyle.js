import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Styled-component's global styling... obviously, as the name suggests. */
  * {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    box-sizing: border-box;
    background: ${props => props.theme.color.background}
  }
`;

export default GlobalStyle; 