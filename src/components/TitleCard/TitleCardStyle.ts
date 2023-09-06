import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
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
    font-size: 2rem;
    margin-top: 0.5rem;
    &::placeholder {
      color: ${({ theme }) => theme.color.black};
    }
  }
  .input-desc {
    margin-top: 16px;
  }
`;
