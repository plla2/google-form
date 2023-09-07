import { styled } from 'styled-components';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import TitleCard from '../components/TitleCard/TitleCard';
import Sidebar from '../components/Sidebar/Sidebar';

const S_Container = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  position: relative;
`;

const Formpage = () => {
  return (
    <S_Container>
      <TitleCard />
      <QuestionCard />
      <Sidebar />
    </S_Container>
  );
};

export default Formpage;
