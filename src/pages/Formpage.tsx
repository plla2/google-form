import { styled } from 'styled-components';
import TitleCard from '../components/TitleCard/TitleCard';
import Sidebar from '../components/Sidebar/Sidebar';
import { useState } from 'react';
import QuestionWrapper from '../components/Wrapper/QuestionWrapper/QuestionWrapper';
import { useAppSelector } from '../redux/rtk-hooks/useAppSelector';

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  position: relative;
`;

const Formpage = () => {
  const { form, questions } = useAppSelector((state) => state.form);
  const [info, setInfo] = useState({
    title: form.title,
    desc: '',
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
      {questions.map((question) => (
        <QuestionWrapper key={question.id} questionId={question.id} />
      ))}
      <Sidebar info={info} />
    </S_Container>
  );
};

export default Formpage;
