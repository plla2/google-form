import { SelectQuestionPropsType } from './Type';
import { Checkbox, Radio } from '@mui/material';
import * as S from './SelectQuestionStyle';
import { QUESTION_OPTION } from '../../../constant/Const';
import { useAppDispatch } from '../../../redux/rtk-hooks/useAppDispatch';
import { questionActions } from '../../../redux/slice/questionSlice';
import { useLocation } from 'react-router-dom';
import useInput from '../../../hooks/useInput';

const SelectQuestion = ({ type, optionId, questionId, optionContent, isLast }: SelectQuestionPropsType) => {
  const option = useInput(isLast ? `옵션 추가` : `옵션 ${optionId}`);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isPreview = location.pathname === '/preview';

  const handleAddOption = () => {
    isLast && dispatch(questionActions.addOption({ id: questionId, optionId }));
  };

  const handleSelectOption = () => {
    switch (type) {
      case QUESTION_OPTION.ONE_SELECT:
        return <Radio className="option" disabled={isPreview ? false : true} />;
      case QUESTION_OPTION.MULTIPLE_SELECT:
        return <Checkbox className="option" disabled={isPreview ? false : true} />;
      case QUESTION_OPTION.DROPDOWN:
        return <div className="option-dropdown">{optionId}</div>;
      default:
        return;
    }
  };
  return (
    <S.Wrapper isLast={isLast}>
      {handleSelectOption()}
      {isPreview ? (
        <div className="preview-option">{optionContent}</div>
      ) : (
        <input type="text" value={option.value} onChange={option.onChange} onClick={handleAddOption} />
      )}
    </S.Wrapper>
  );
};

export default SelectQuestion;
