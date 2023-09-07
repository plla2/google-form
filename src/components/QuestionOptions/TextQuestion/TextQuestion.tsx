import { TextQuestionPropsType } from './Type';
import * as S from './TextQuestionStyle';
import { useLocation } from 'react-router-dom';

const TextQuestion = ({ type }: TextQuestionPropsType) => {
  const location = useLocation();
  const isPreview = location.pathname === '/preview';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <S.Wrapper type={type}>
      {isPreview ? (
        <input type="text" placeholder="내 답변" onChange={handleChange} />
      ) : (
        <input type="text" disabled placeholder={type === 'short' ? '단답형 텍스트' : '장문형 텍스트'} />
      )}
    </S.Wrapper>
  );
};

export default TextQuestion;
