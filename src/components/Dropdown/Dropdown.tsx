import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { S_MenuItem, S_Root } from './DropdownStyle';
import { menus } from '../../constant/Const';
import { useAppDispatch } from '../../redux/rtk-hooks/useAppDispatch';
import { questionActions } from '../../redux/slice/questionSlice';

const Dropdown = () => {
  const [type, setType] = useState<unknown>(2);
  const dispatch = useAppDispatch();

  const handleChange = (e: SelectChangeEvent<unknown>) => {
    setType(e.target.value as string);
    dispatch(questionActions.changeType(e.target.value));
  };

  return (
    <S_Root fullWidth value={type} onChange={handleChange}>
      {menus.map((menu) => (
        <S_MenuItem key={menu.id} value={menu.id}>
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
