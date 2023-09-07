import { MenuItem, Select } from '@mui/material';
import { styled } from 'styled-components';

export const S_Root = styled(Select)`
  max-height: 50px;
  width: 240px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.grey_verylight};
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 240px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
  }
  & .MuiSelect-select.MuiSelect-select {
    padding: 0;
    width: 100%;
    height: 100%;
  }
  fieldset {
    border: none;
    padding: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
export const S_MenuItem = styled(MenuItem)`
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
  }
`;
