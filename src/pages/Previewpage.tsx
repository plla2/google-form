import { S_Container } from './Formpage';
import { useAppSelector } from '../redux/rtk-hooks/useAppSelector';
import PreviewWrapper from '../components/Wrapper/PreviewWrapper/PreviewWrapper';
import TitleCard from '../components/TitleCard/TitleCard';

const Previewpage = () => {
  const form = useAppSelector((state) => state.form);
  const { questions } = form;
  return (
    <S_Container>
      <TitleCard info={form.form} />
      {questions.map((question) => (
        <PreviewWrapper key={question.id} questionId={question.id} />
      ))}
    </S_Container>
  );
};

export default Previewpage;
