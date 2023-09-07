import { styled } from 'styled-components';

export const Container = styled.div<{ isEssential: boolean }>`
  background-color: ${({ theme }) => theme.color.white};
  width: 768px;
  min-height: 120px;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px;

  .questionTitle {
    font-size: 20px;

    &__essential {
      font-size: 20px;
      color: red;
      font-weight: bold;
      margin-left: 7px;
    }
  }
`;
