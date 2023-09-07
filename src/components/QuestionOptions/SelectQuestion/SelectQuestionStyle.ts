import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  height: 42px;
  margin-top: 10px;

  .option {
    svg {
      height: 22px;
      width: 22px;
    }
  }

  .option-dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    width: 42px;
    height: 42px;
  }
  input {
    width: 85%;
    font-size: 15px;

    &:hover {
      border: none;
      outline: none;
      background: transparent;
      border-bottom: 1px solid ${({ theme }) => theme.color.grey_medium};
    }
    &:focus {
      background: transparent;
      transition: 0.8s ease;
      border-bottom: 1.5px solid ${({ theme }) => theme.color.purple_dark};
    }
  }
`;