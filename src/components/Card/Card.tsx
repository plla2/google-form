import { useState } from 'react';
import * as S from './CardStyle';

interface props {
  children: React.ReactNode;
  isTitle: boolean;
}

const Card = ({ children, isTitle }: props) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <S.Wrapper isSelected={isSelected}>
      <S.CardContainer isSelected={isSelected} onClick={() => setIsSelected((select) => !select)}>
        {isTitle ? <S.TitleWrapper /> : null}
        <S.SelectedWrapper isSelected={isSelected} />
        {children}
      </S.CardContainer>
    </S.Wrapper>
  );
};

export default Card;
