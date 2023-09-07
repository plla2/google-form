import { useState } from 'react';
import useInput from '../../hooks/useInput';
import Card from '../Card/Card';
import Dropdown from '../Dropdown/Dropdown';
import copyIcon from '../../assets/icons/copy.svg';
import deleteIcon from '../../assets/icons/trash.svg';
import * as S from './QuestionCardStyle';
import SelectQuestion from '../QuestionOptions/SelectQuestion/SelectQuestion';
import TextQuestion from '../QuestionOptions/TextQuestion/TextQuestion';
import { Switch } from '@mui/material';
import { useAppSelector } from '../../redux/rtk-hooks/useAppSelector';
import { QUESTION_OPTION } from '../../constant/Const';

const QuestionCard = () => {
  const questionInput = useInput('');
  const [isEssential, setIsEssential] = useState(false);
  const { type: questionOption } = useAppSelector((state) => state.questionReducer);

  const handleChangeEssential = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEssential(e.target.checked);
  };

  const selectOption = () => {
    switch (questionOption) {
      case QUESTION_OPTION.ONE_SELECT:
        return <SelectQuestion type="radio" />;
      case QUESTION_OPTION.MULTIPLE_SELECT:
        return <SelectQuestion type="check" />;
      case QUESTION_OPTION.SHORT_ANSWER:
        return <TextQuestion type="short" />;
      case QUESTION_OPTION.LONG_ANSWER:
        return <TextQuestion type="long" />;
      case QUESTION_OPTION.DROPDOWN:
        return <SelectQuestion type="dropdown" />;
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
            value={questionInput.value}
            onChange={questionInput.onChange}
          />
          <Dropdown />
        </div>
        {selectOption()}
        <hr />
        <div className="settings">
          <img src={copyIcon} alt="복사 아이콘" />
          <img src={deleteIcon} alt="삭제 아이콘" />
          <div className="switch-name">필수</div>
          <Switch className="essentialSwitch" checked={isEssential} onChange={handleChangeEssential} />
        </div>
      </S.Container>
    </Card>
  );
};

export default QuestionCard;
