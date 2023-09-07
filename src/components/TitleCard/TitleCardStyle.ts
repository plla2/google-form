import { styled } from 'styled-components';

export const Wrapper = styled.div`
  input {
    margin-left: 3px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey_verylight};
    padding: 2px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .input-title {
    font-size: 32px;
    margin-top: 8px;
    &::placeholder {
      color: ${({ theme }) => theme.color.black};
    }
    &:focus {
      transition: 0.8s ease;
      border-bottom: 1.5px solid ${({ theme }) => theme.color.purple_dark};
    }
  }
  .input-desc {
    margin-top: 16px;
    &:focus {
      transition: 0.8s ease;
      border-bottom: 1.5px solid ${({ theme }) => theme.color.purple_dark};
    }
  }
`;
