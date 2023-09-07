import { S_MenuItem, S_Root } from './DropdownStyle';
import { menus } from '../../constant/Const';
import { useAppDispatch } from '../../redux/rtk-hooks/useAppDispatch';
import { questionActions } from '../../redux/slice/questionSlice';
import { useAppSelector } from '../../redux/rtk-hooks/useAppSelector';
import { SelectChangeEvent } from '@mui/material';

interface DropdownPropsType {
  questionId: string;
}

const Dropdown = ({ questionId }: DropdownPropsType) => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.questions);
  const question = questions.find((item) => item.id === questionId);
  const questionType = question?.type;

  const handleChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(questionActions.changeType({ id: questionId, type: e.target.value }));
  };

  return (
    <S_Root fullWidth value={questionType} onChange={handleChange}>
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
