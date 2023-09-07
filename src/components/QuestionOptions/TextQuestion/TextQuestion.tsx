import { TextQuestionPropsType } from './Type';
import * as S from './TextQuestionStyle';

const TextQuestion = ({ type }: TextQuestionPropsType) => {
  return (
    <S.Wrapper type={type}>
      <input type="text" disabled placeholder={type === 'short' ? '단답형 텍스트' : '장문형 텍스트'} />
    </S.Wrapper>
  );
};

export default TextQuestion;
