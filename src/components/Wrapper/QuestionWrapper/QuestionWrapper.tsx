import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../redux/rtk-hooks/useAppSelector';
import { useAppDispatch } from '../../../redux/rtk-hooks/useAppDispatch';
import { questionActions } from '../../../redux/slice/questionSlice';
import { QUESTION_OPTION } from '../../../constant/Const';
import SelectQuestion from '../../QuestionOptions/SelectQuestion/SelectQuestion';
import TextQuestion from '../../QuestionOptions/TextQuestion/TextQuestion';
import Card from '../../Card/Card';
import * as S from './QuestionWrapperStyle';
import Dropdown from '../../Dropdown/Dropdown';
import copyIcon from '../../../assets/icons/copy.svg';
import deleteIcon from '../../../assets/icons/trash.svg';
import { Switch } from '@mui/material';

interface QuestionCardPropsType {
  questionId: number;
}

const QuestionWrapper = ({ questionId }: QuestionCardPropsType) => {
  const dispatch = useAppDispatch();
  const [isEssential, setIsEssential] = useState(false);
  const { type: questionOption, options, questionContent } = useAppSelector((state) => state.questions)[questionId];

  useEffect(() => {
    dispatch(questionActions.setEssential({ id: questionId, isEssential: isEssential }));
  }, [isEssential]);

  const handleSwitch = () => {
    setIsEssential((isEssential) => !isEssential);
  };

  const handleQuestionContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(questionActions.setQuestionContent({ id: questionId, questionContent: e.target.value }));
  };

  const selectOption = () => {
    switch (questionOption) {
      case QUESTION_OPTION.ONE_SELECT:
        return options.map((option) => <SelectQuestion key={option.id} questionId={option.id} type="radio" />);
      case QUESTION_OPTION.MULTIPLE_SELECT:
        return options.map((option) => <SelectQuestion key={option.id} questionId={option.id} type="check" />);
      case QUESTION_OPTION.DROPDOWN:
        return options.map((option) => <SelectQuestion key={option.id} questionId={option.id} type="dropdown" />);
      case QUESTION_OPTION.SHORT_ANSWER:
        return <TextQuestion type="short" />;
      case QUESTION_OPTION.LONG_ANSWER:
        return <TextQuestion type="long" />;
      default:
        return;
    }
  };

  return (
    <Card isTitle={false}>
      <S.Container>
        <div className="question">
          <input
            type="text"
            className="question-input"
            placeholder="제목없는 질문"
            value={questionContent}
            onChange={handleQuestionContentChange}
          />
          <Dropdown questionId={questionId} />
        </div>
        {selectOption()}
        <hr />
        <div className="settings">
          <img src={copyIcon} alt="복사 아이콘" />
          <img src={deleteIcon} alt="삭제 아이콘" />
          <div className="switch-name">필수</div>
          <Switch className="essentialSwitch" checked={isEssential} onChange={handleSwitch} />
        </div>
      </S.Container>
    </Card>
  );
};

export default QuestionWrapper;