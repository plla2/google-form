import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import * as S from './TitleCardStyle';

export interface InfoPropsType {
  title: string;
  desc: string;
}

interface TitleCardPropsType {
  info: InfoPropsType;
  handleChange?: (name: string, value: string) => void;
}

const TitleCard = ({ info, handleChange }: TitleCardPropsType) => {
  const location = useLocation();
  const { pathname } = location;
  const isPreview = pathname === '/preview';
  const isResult = pathname === '/result';

  return (
    <>
      {!isPreview && !isResult ? (
        <S.FormWrapper>
          <Card isTitle>
            <div className="inputs">
              <input
                type="text"
                className="input__title"
                placeholder="제목 없는 설문지"
                name="title"
                value={info.title}
                onChange={({ target: { value } }) => handleChange && handleChange('title', value)}
              />
              <input
                type="text"
                className="input__desc"
                placeholder="설문지 설명"
                name="desc"
                value={info.desc}
                onChange={({ target: { value } }) => handleChange && handleChange('desc', value)}
              />
            </div>
          </Card>
        </S.FormWrapper>
      ) : (
        <S.PreviewWrapper>
          <div className="preview">
            <div className="preview__title">{info.title}</div>
            <div className="preview__desc">{info.desc}</div>
            <hr />
            <div className="preview__essential">* 표시는 필수 질문임</div>
          </div>
        </S.PreviewWrapper>
      )}
    </>
  );
};

export default TitleCard;
