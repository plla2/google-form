import { useState } from 'react';
import useInput from '../../hooks/useInput';
import Card from '../Card/Card';
import Dropdown from '../Dropdown/Dropdown';
import copyIcon from '../../assets/icons/copy.svg';
import deleteIcon from '../../assets/icons/trash.svg';
import { S_Switch } from './QuestionCardStyle';
import * as S from './QuestionCardStyle';

const QuestionCard = () => {
  const questionInput = useInput('');
  const [isEssential, setIsEssential] = useState(false);

  const handleChangeEssential = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEssential(e.target.checked);
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
        <hr />
        <div className="settings">
          <img src={copyIcon} alt="복사 아이콘" />
          <img src={deleteIcon} alt="삭제 아이콘" />
          <div className="switch-name">필수</div>
          <S_Switch className="essentialSwitch" checked={isEssential} onChange={handleChangeEssential} />
        </div>
      </S.Container>
    </Card>
  );
};

export default QuestionCard;
