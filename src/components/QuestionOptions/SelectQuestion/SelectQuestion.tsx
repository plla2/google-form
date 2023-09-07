import { SelectQuestionPropsType } from './Type';
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

  const handleAddOption = () => {
    isLast && dispatch(questionActions.addOption({ id: questionId, optionId }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(questionActions.setOptionContent({ id: questionId, optionId, optionContent: e.target.value }));
  };

  const handleSelectOption = () => {
    switch (type) {
      case QUESTION_OPTION.ONE_SELECT:
        return (
          <Radio
            className="option checked"
            disabled={isPreview ? false : true}
            onClick={() => dispatch(questionActions.chooseRadioAnswer({ id: questionId, optionId, isAnswer }))}
            value={String(optionId)}
            checked={isPreview ? isAnswer : false}
          />
        );
      case QUESTION_OPTION.MULTIPLE_SELECT:
        return (
          <Checkbox
            className="option checked"
            disabled={isPreview ? false : true}
            onClick={() => dispatch(questionActions.chooseCheckAnswer({ id: questionId, optionId, isAnswer }))}
            value={String(optionId)}
            checked={isPreview ? isAnswer : false}
          />
        );
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
        <input type="text" value={optionContent} onChange={handleContentChange} onClick={handleAddOption} />
      )}
    </S.Wrapper>
  );
};

export default SelectQuestion;
