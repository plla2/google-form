import { QUESTION_OPTION } from '../../../constant/Const';
import { useAppSelector } from '../../../redux/rtk-hooks/useAppSelector';
import SelectQuestion from '../../QuestionOptions/SelectQuestion/SelectQuestion';
import TextQuestion from '../../QuestionOptions/TextQuestion/TextQuestion';
import * as S from './PreviewWrapperStyle';

interface PreviewWrapperPropsType {
  questionId: string;
}

const PreviewWrapper = ({ questionId }: PreviewWrapperPropsType) => {
  const { questions } = useAppSelector((state) => state.form);
  const pickedQuestion = questions.find((item) => item.id === questionId);
  if (!pickedQuestion) return null;
  const { type: questionType, options, questionContent, isEssential } = pickedQuestion;
  const isAnswer = (value: number) => pickedQuestion.checkAnswers.findIndex((item) => item === value) >= 0;

  const getOptionList = (type: number) => {
    const optionList = options?.map((option) => (
      <SelectQuestion
        isAnswer={isAnswer(option.id)}
        key={option.id}
        questionId={questionId}
        optionId={option.id}
        type={type}
        optionContent={option.optionContent}
        isLast={false}
      />
    ));

    return optionList;
  };

  const selectOption = () => {
    switch (questionType) {
      case QUESTION_OPTION.ONE_SELECT:
      case QUESTION_OPTION.MULTIPLE_SELECT:
      case QUESTION_OPTION.DROPDOWN:
        return getOptionList(questionType);
      case QUESTION_OPTION.SHORT_ANSWER:
        return <TextQuestion type="short" />;
      case QUESTION_OPTION.LONG_ANSWER:
        return <TextQuestion type="long" />;
      default:
        return;
    }
  };

  return (
    <S.Container isEssential={true}>
      <span className="questionTitle">{questionContent}</span>
      {isEssential && <span className="questionTitle__essential">*</span>}
      {selectOption()}
    </S.Container>
  );
};

export default PreviewWrapper;
