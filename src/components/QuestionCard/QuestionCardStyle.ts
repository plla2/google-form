import { Switch } from '@mui/material';
import { styled } from 'styled-components';

export const S_Switch = styled(Switch)`
  & .MuiSwitch-colorSecondary.Mui-checked {
    color: ${({ theme }) => theme.color.purple_dark};
  }
  & .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: ${({ theme }) => theme.color.purple_dark};
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  input {
    border: none;
  }
  .question {
    display: flex;
    .question-input {
      background-color: ${({ theme }) => theme.color.grey_verylight};
      width: 400px;
      height: 48px;
      padding: 10px;
      font-size: 16px;
      margin-right: 60px;
      &:hover {
        background-color: ${({ theme }) => theme.color.grey_light};
      }
      &::placeholder {
        color: ${({ theme }) => theme.color.black};
      }
    }
  }
  hr {
    margin-top: 150px;
    border: 1px solid ${({ theme }) => theme.color.grey_verylight};
  }
  .settings {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;
    margin-top: 10px;
    img {
      cursor: pointer;
      width: 30px;
      height: 30px;
      margin-right: 25px;
    }
    .switch-name {
      display: flex;
      align-items: center;
      padding-left: 10px;
      height: 30px;
      font-size: 14px;
      border-left: 1px solid ${({ theme }) => theme.color.grey_verylight};
    }
  }
`;
