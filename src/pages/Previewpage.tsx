import { S_Container } from './Formpage';
import { useAppSelector } from '../redux/rtk-hooks/useAppSelector';
import PreviewWrapper from '../components/Wrapper/PreviewWrapper/PreviewWrapper';
import TitleCard from '../components/TitleCard/TitleCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Previewpage = () => {
  const form = useAppSelector((state) => state.form);
  const { questions } = form;

  return (
    <S_Container>
      <TitleCard info={form.form} />
      {questions.map((question) => (
        <PreviewWrapper key={question.id} questionId={question.id} />
      ))}
      <Link to={'/result'}>
        <S_Button>제출</S_Button>
      </Link>
    </S_Container>
  );
};

const S_Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
  width: 80px;
  background-color: ${({ theme }) => theme.color.purple_dark};
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  &:hover {
    background-color: rebeccapurple;
  }
`;

export default Previewpage;
