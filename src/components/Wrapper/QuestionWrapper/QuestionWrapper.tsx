import { useAppSelector } from '../../../redux/rtk-hooks/useAppSelector';
import QuestionCard from '../../QuestionCard/QuestionCard';

const QuestionWrapper = () => {
  const { questions } = useAppSelector((state) => state.form);

  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question.id} id={question.id} />
      ))}
    </div>
  );
};

export default QuestionWrapper;
