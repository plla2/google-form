import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  input {
    border: none;
  }
  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .question-input {
      background-color: ${({ theme }) => theme.color.grey_verylight};
      width: 420px;
      height: 48px;
      padding: 10px;
      font-size: 16px;
      margin-right: 60px;
      border-radius: 4px;
      border-bottom: 1px solid ${({ theme }) => theme.color.grey_medium};
      &:hover {
        background-color: ${({ theme }) => theme.color.grey_light};
      }
      &:focus {
        transition: 0.8s ease;
        border-bottom: 1.5px solid ${({ theme }) => theme.color.purple_dark};
      }
    }
  }
  hr {
    margin-top: 40px;
    border: 1px solid ${({ theme }) => theme.color.grey_verylight};
  }
  .settings {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;
    margin-top: 10px;
    .icon {
      cursor: pointer;
      padding: 10px;
      margin-right: 15px;
      border-radius: 5px;
      &:hover {
        background-color: ${({ theme }) => theme.color.grey_hover};
      }
    }
    img {
      width: 30px;
      height: 30px;
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
  .dragHandler {
    position: relative;
    left: 48%;
    width: 35px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
    &:hover {
      background-color: ${({ theme }) => theme.color.grey_hover};
    }
    img {
      width: 25px;
      cursor: pointer;
    }
  }
`;
