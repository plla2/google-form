import { styled } from 'styled-components';

export const FormWrapper = styled.div`
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
  .input__title {
    font-size: 32px;
    margin-top: 8px;
    &:focus {
      transition: 0.8s ease;
      border-bottom: 1.5px solid ${({ theme }) => theme.color.purple_dark};
    }
  }
  .input__desc {
    margin-top: 16px;
    &:focus {
      transition: 0.8s ease;
      border-bottom: 1.5px solid ${({ theme }) => theme.color.purple_dark};
    }
  }
`;

export const PreviewWrapper = styled.div`
  .preview {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.color.white};
    height: auto;
    width: 768px;
    border: ${({ theme }) => `1px solid ${theme.color.grey_light}`};
    border-radius: 8px;

    &:before {
      content: '';
      height: 12px;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      width: 100%;
      background-color: ${({ theme }) => theme.color.purple_dark};
    }
    &__title {
      margin-left: 30px;
      margin-top: 25px;
      font-size: 32px;
    }
    &__desc {
      margin-left: 30px;
      margin-top: 18px;
      font-size: 15px;
    }
    hr {
      width: 100%;
      margin-top: 18px;
    }
    &__essential {
      margin: 12px 28px;
      font-size: 14px;
      color: red;
    }
  }
`;
