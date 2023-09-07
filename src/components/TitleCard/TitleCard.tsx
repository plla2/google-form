import Card from '../Card/Card';
import * as S from './TitleCardStyle';

export interface InfoPropsType {
  formTitle: string;
  formDesc: string;
}

interface TitleCardPropsType {
  info: InfoPropsType;
  handleChange: (name: string, value: string) => void;
}

const TitleCard = ({ info, handleChange }: TitleCardPropsType) => {
  return (
    <S.Wrapper>
      <Card isTitle>
        <div className="inputs">
          <input
            type="text"
            className="input-title"
            placeholder="제목 없는 설문지"
            name="formTitle"
            value={info.formTitle}
            onChange={({ target: { value } }) => handleChange('formTitle', value)}
          />
          <input
            type="text"
            className="input-desc"
            placeholder="설문지 설명"
            name="formDesc"
            value={info.formDesc}
            onChange={({ target: { value } }) => handleChange('formDesc', value)}
          />
        </div>
      </Card>
    </S.Wrapper>
  );
};

export default TitleCard;
