import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
  &.selected {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  height: auto;
  width: 768px;
  border: ${({ theme }) => `1px solid ${theme.color.grey_light}`};
  border-radius: 8px;
  padding: 24px;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.purple_dark};
  min-width: 100%;
  height: 12px;
  top: 0;
  left: 0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  z-index: 10;
`;

export const SelectedWrapper = styled.div`
  position: absolute;
  min-height: 100%;
  width: 7px;
  top: 0;
  left: 0;
  z-index: 9;
`;
