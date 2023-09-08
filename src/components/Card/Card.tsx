import { useState } from 'react';
import * as S from './CardStyle';
import { props } from './CardType';

const Card = ({ children, isTitle, id }: props) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardFocus = (id: string) => {
    if (selectedCard === id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id as string);
    }
  };

  return (
    <S.Wrapper className={selectedCard === id ? 'selected' : ''}>
      <S.CardContainer onClick={() => handleCardFocus(id as string)}>
        {isTitle ? <S.TitleWrapper /> : null}
        <S.SelectedWrapper />
        {children}
      </S.CardContainer>
    </S.Wrapper>
  );
};

export default Card;
