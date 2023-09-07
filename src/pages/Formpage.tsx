import { styled } from 'styled-components';
import TitleCard from '../components/TitleCard/TitleCard';
import Sidebar from '../components/Sidebar/Sidebar';
import { useState } from 'react';
import QuestionWrapper from '../components/Wrapper/QuestionWrapper/QuestionWrapper';

const S_Container = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  position: relative;
`;

const Formpage = () => {
  const [info, setInfo] = useState({
    formTitle: '제목 없는 설문지',
    formDesc: '',
  });
  const handleInfo = (name: string, value: string) => {
    setInfo({
      ...info,
      [name]: value,
    });
  };
  return (
    <S_Container>
      <TitleCard info={info} handleChange={handleInfo} />
      <QuestionWrapper />
      <Sidebar info={info} />
    </S_Container>
  );
};

export default Formpage;
