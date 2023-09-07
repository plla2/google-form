import { styled } from 'styled-components';

export const Wrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;

  box-shadow: ${({ isSelected }) => (isSelected ? '0 3px 5px rgba(0,0,0,0.3)' : null)};
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
`;

export const CardContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  min-height: 138px;
  width: 768px;
  border: ${({ theme }) => `1px solid ${theme.color.grey_light}`};
  border-radius: 8px;
  padding: 24px;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.purple_dark};
  min-width: 100%;
  height: 10px;
  top: 0;
  left: 0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  z-index: 10;
`;

export const SelectedWrapper = styled.div<{ isSelected: boolean }>`
  position: absolute;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.color.blue_dark : '')};
  min-height: 100%;
  width: 7px;
  top: 0;
  left: 0;
  z-index: 9;
`;
