import { S_MenuItem, S_Root } from './DropdownStyle';
import { useAppDispatch } from '../../redux/rtk-hooks/useAppDispatch';
import { questionActions } from '../../redux/slice';
import { useAppSelector } from '../../redux/rtk-hooks/useAppSelector';
import { SelectChangeEvent } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { DropdownPropsType } from './DropdownType';

const Dropdown = ({ questionId, menus, isAnswer }: DropdownPropsType) => {
  const dispatch = useAppDispatch();
  const { questions } = useAppSelector((state) => state.form);
  const question = questions.find((question) => question.id === questionId);
  if (!question) return null;
  const { type: questionType, checkAnswers } = question;
  const chooseAnswer = checkAnswers.length > 0 ? checkAnswers[0] : '';
  const location = useLocation();
  const isPreview = location.pathname === '/preview';
  const isResult = location.pathname === '/result';

  const handleTypeChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(questionActions.changeType({ id: questionId, type: e.target.value }));
  };

  const handleAnswerChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(questionActions.chooseRadioAnswer({ id: questionId, optionId: e.target.value, isAnswer }));
  };

  const showValue = () => (isPreview || isResult ? chooseAnswer : questionType);

  return (
    <S_Root
      value={showValue()}
      disabled={isResult ? true : false}
      onChange={isPreview ? handleAnswerChange : handleTypeChange}
    >
      {menus.map((menu) => (
        <S_MenuItem key={menu.option} value={menu.id}>
          <span>
            {menu.icon && <img src={menu.icon} alt="옵션 아이콘" />}
            <p>{menu.option}</p>
          </span>
        </S_MenuItem>
      ))}
    </S_Root>
  );
};

export default Dropdown;
