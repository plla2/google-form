import { styled } from 'styled-components';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import TitleCard from '../components/TitleCard/TitleCard';

const Container = styled.div`
  margin-top: 3rem;
  flex-direction: column;
`;

const Formpage = () => {
  return (
    <Container>
      <TitleCard />
      <QuestionCard />
    </Container>
  );
};

export default Formpage;
