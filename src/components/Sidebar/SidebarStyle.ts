import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: -100px;
  top: 20px;

  .images {
    display: flex;
    width: 56px;
    height: 100px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 12px;

    img {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 5px;

      &:hover {
        background-color: ${({ theme }) => theme.color.grey_hover};
      }
    }
  }
`;
