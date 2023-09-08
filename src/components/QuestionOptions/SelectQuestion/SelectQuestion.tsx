import { SelectQuestionPropsType } from './SelectQuestionType';
import { Checkbox, Radio } from '@mui/material';
import * as S from './SelectQuestionStyle';
import { QUESTION_OPTION } from '../../../constant/Const';
import { useAppDispatch } from '../../../redux/rtk-hooks/useAppDispatch';
import { questionActions } from '../../../redux/slice/questionSlice';
import { useLocation } from 'react-router-dom';

const SelectQuestion = ({ type, optionId, questionId, optionContent, isLast, isAnswer }: SelectQuestionPropsType) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isPreview = location.pathname === '/preview';
  const isResult = location.pathname === '/result';

  const handleAddOption = () => {
    isLast && dispatch(questionActions.addOption({ id: questionId, optionId }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(questionActions.setOptionContent({ id: questionId, optionId, optionContent: e.target.value }));
  };

  const isChecked = () => {
    if (isPreview || isResult) return isAnswer;
    else return false;
  };

  const isDisabled = () => {
    if (isResult) return true;
    else return false;
  };

  const handleSelectOption = () => {
    switch (type) {
      case QUESTION_OPTION.ONE_SELECT:
        return (
          <Radio
            className="option checked"
            disabled={isDisabled()}
            onClick={() => dispatch(questionActions.chooseRadioAnswer({ id: questionId, optionId, isAnswer }))}
            value={String(optionId)}
            checked={isChecked()}
          />
        );
      case QUESTION_OPTION.MULTIPLE_SELECT:
        return (
          <Checkbox
            className="option checked"
            disabled={isDisabled()}
            onClick={() => dispatch(questionActions.chooseCheckAnswer({ id: questionId, optionId, isAnswer }))}
            value={String(optionId)}
            checked={isChecked()}
          />
        );
      case QUESTION_OPTION.DROPDOWN:
        return <div className="option-dropdown">{optionId}</div>;
      default:
        return;
    }
  };
  return (
    <S.Wrapper $isLast={isLast}>
      {handleSelectOption()}
      {isPreview || isResult ? (
        <div className="preview-option">{optionContent}</div>
      ) : (
        <input type="text" value={optionContent} onChange={handleContentChange} onClick={handleAddOption} />
      )}
    </S.Wrapper>
  );
};

export default SelectQuestion;
