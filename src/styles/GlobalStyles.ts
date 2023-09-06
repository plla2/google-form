import { createGlobalStyle } from 'styled-components';
import './resetStyles.scss';

export const GlobalStyles = createGlobalStyle`
  html{
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.purple_light};
  }
`;
