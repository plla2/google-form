import { TextQuestionPropsType } from './TextQuestionType';
import * as S from './TextQuestionStyle';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/rtk-hooks/useAppDispatch';
import { useAppSelector } from '../../../redux/rtk-hooks/useAppSelector';
import { questionActions } from '../../../redux/slice/';

const TextQuestion = ({ type, questionId }: TextQuestionPropsType) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isPreview = location.pathname === '/preview';
  const isResult = location.pathname === '/result';
  const { questions } = useAppSelector((state) => state.form);
  const question = questions?.find((item) => item.id === questionId);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(questionActions.writeTextAnswer({ id: questionId, textContent: e.target.value }));
  };

  return (
    <S.Wrapper type={type}>
      {!isPreview && !isResult ? (
        <input type="text" disabled placeholder={type === 'short' ? '단답형 텍스트' : '장문형 텍스트'} />
      ) : (
        <input
          type="text"
          placeholder={isPreview ? '내 답변' : ''}
          onChange={handleTextChange}
          value={question?.textAnswers}
          disabled={isResult ? true : false}
        />
      )}
    </S.Wrapper>
  );
};

export default TextQuestion;
