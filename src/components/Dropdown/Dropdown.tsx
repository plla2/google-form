import { S_MenuItem, S_Root } from './DropdownStyle';
import { useAppDispatch } from '../../redux/rtk-hooks/useAppDispatch';
import { questionActions } from '../../redux/slice/questionSlice';
import { useAppSelector } from '../../redux/rtk-hooks/useAppSelector';
import { SelectChangeEvent } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface MenusPropsType {
  id: number;
  option: string;
  icon?: string;
}

interface DropdownPropsType {
  questionId: string;
  menus: MenusPropsType[];
  isAnswer?: boolean;
}

const Dropdown = ({ questionId, menus, isAnswer }: DropdownPropsType) => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.questions);
  const question = questions.find((item) => item.id === questionId);
  if (!question) return null;
  const { type: questionType, checkAnswers } = question;
  const chooseAnswer = checkAnswers.length > 0 ? checkAnswers[0] : '';
  const location = useLocation();
  const isPreview = location.pathname === '/preview';

  const handleTypeChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(questionActions.changeType({ id: questionId, type: e.target.value }));
  };

  const handleAnswerChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(questionActions.chooseRadioAnswer({ id: questionId, optionId: e.target.value, isAnswer: isAnswer }));
  };

  return (
    <S_Root
      value={isPreview ? chooseAnswer : questionType}
      onChange={isPreview ? handleAnswerChange : handleTypeChange}
    >
      {menus.map((menu) => (
        <S_MenuItem key={menu.id} value={menu.id}>
          <span>
            <img src={menu.icon} alt="옵션 아이콘" />
            <p>{menu.option}</p>
          </span>
        </S_MenuItem>
      ))}
    </S_Root>
  );
};

export default Dropdown;
