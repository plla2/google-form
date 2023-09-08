import { useAppSelector } from '../redux/rtk-hooks/useAppSelector';
import TitleCard from '../components/TitleCard/TitleCard';
import PreviewWrapper from '../components/Wrapper/PreviewWrapper/PreviewWrapper';
import { S_Container } from './Formpage';

const Resultpage = () => {
  const form = useAppSelector((state) => state.form);
  const { questions } = form;
  return (
    <S_Container>
      <div className="page-title">설문 응답 결과</div>
      <TitleCard info={form.form} />
      {questions.map((item) => (
        <PreviewWrapper key={item.id} questionId={item.id} />
      ))}
    </S_Container>
  );
};

export default Resultpage;
