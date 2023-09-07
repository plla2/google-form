import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { menus } from '../../constant/Const';
import { S_MenuItem, S_Root } from './DropdownStyle';

const Dropdown = () => {
  const [type, setType] = useState('단답형');

  const handleChange = (e: SelectChangeEvent<unknown>) => {
    setType(e.target.value as string);
  };

  return (
    <S_Root fullWidth value={type} onChange={handleChange}>
      {menus.map((menu) => (
        <S_MenuItem key={menu.id} value={menu.type}>
          <span>
            <img src={menu.icon} alt="옵션 아이콘" />
            <p>{menu.type}</p>
          </span>
        </S_MenuItem>
      ))}
    </S_Root>
  );
};

export default Dropdown;
