import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import * as S from './TitleCardStyle';
import { TitleCardPropsType } from './TitleCardType';

const TitleCard = ({ info, handleChange }: TitleCardPropsType) => {
  const { title, desc } = info;
  const location = useLocation();
  const { pathname } = location;
  const isPreview = pathname === '/preview';
  const isResult = pathname === '/result';

  return (
    <>
      {isPreview || isResult ? (
        <S.PreviewWrapper>
          <div className="preview">
            <div className="preview__title">{title}</div>
            <div className="preview__desc">{desc}</div>
            <hr />
            <div className="preview__essential">* 표시는 필수 질문</div>
          </div>
        </S.PreviewWrapper>
      ) : (
        <S.FormWrapper>
          <Card isTitle>
            <div className="inputs">
              <input
                type="text"
                className="input__title"
                placeholder="제목 없는 설문지"
                name="title"
                value={title}
                onChange={({ target: { value } }) => handleChange && handleChange('title', value)}
              />
              <input
                type="text"
                className="input__desc"
                placeholder="설문지 설명"
                name="desc"
                value={desc}
                onChange={({ target: { value } }) => handleChange && handleChange('desc', value)}
              />
            </div>
          </Card>
        </S.FormWrapper>
      )}
    </>
  );
};

export default TitleCard;
