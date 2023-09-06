import Card from '../Card/Card';
import * as S from './TitleCardStyle';
import useInput from '../../hooks/useInput';

const TitleCard = () => {
  const title = useInput('제목 없는 설문지');
  const desc = useInput('');

  return (
    <S.Wrapper>
      <Card isTitle>
        <div className="inputs">
          <input
            type="text"
            className="input-title"
            placeholder="제목 없는 설문지"
            value={title.value}
            onChange={title.onChange}
          />
          <input
            type="text"
            className="input-desc"
            placeholder="설문지 설명"
            value={desc.value}
            onChange={desc.onChange}
          />
        </div>
      </Card>
    </S.Wrapper>
  );
};

export default TitleCard;
